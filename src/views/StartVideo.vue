<template>
  <div class="container">
    <div class="columns is-gapless">
      <div class="column is-9">
        <div id="videos">
          <video
            id="localVideo"
            ref="localVideo"
            muted
            autoplay
            playsinline
          ></video>
          <video
            id="remoteVideo"
            ref="remoteVideo"
            autoplay
            playsinline
          ></video>
        </div>
      </div>
      <div class="column is-3"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

const configuration = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

let peerConnection = null;

let localStream = null;
let remoteStream = null;

function registerPeerConnectionListeners() {
  peerConnection.addEventListener('icegatheringstatechange', () => {
    console.log(
        `ICE gathering state changed: ${peerConnection.iceGatheringState}`);
  });

  peerConnection.addEventListener('connectionstatechange', () => {
    console.log(`Connection state change: ${peerConnection.connectionState}`);
  });

  peerConnection.addEventListener('signalingstatechange', () => {
    console.log(`Signaling state change: ${peerConnection.signalingState}`);
  });

  peerConnection.addEventListener('iceconnectionstatechange ', () => {
    console.log(
        `ICE connection state change: ${peerConnection.iceConnectionState}`);
  });
}

async function createRoom(roomId) {
  const db = firebase.firestore();
  const roomRef = await db.collection('rooms').doc(`${roomId}`);

  console.log('Create PeerConnection with configuration: ', configuration);
  peerConnection = new RTCPeerConnection(configuration);

  registerPeerConnectionListeners();

  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
  });

  // Code for collecting ICE candidates below
  const callerCandidatesCollection = roomRef.collection('callerCandidates');

  peerConnection.addEventListener('icecandidate', event => {
    if (!event.candidate) {
      console.log('Got final candidate!');
      return;
    }
    console.log('Got candidate: ', event.candidate);
    callerCandidatesCollection.add(event.candidate.toJSON());
  });
  // Code for collecting ICE candidates above

  // Code for creating a room below
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  console.log('Created offer:', offer);

  const roomWithOffer = {
    'offer': {
      type: offer.type,
      sdp: offer.sdp,
    },
  };
  await roomRef.set(roomWithOffer);
  roomId = roomRef.id;
  console.log(`New room created with SDP offer. Room ID: ${roomRef.id}`);
  // Code for creating a room above

  peerConnection.addEventListener('track', event => {
    console.log('Got remote track:', event.streams[0]);
    event.streams[0].getTracks().forEach(track => {
      console.log('Add a track to the remoteStream:', track);
      remoteStream.addTrack(track);
    });
  });

  // Listening for remote session description below
  roomRef.onSnapshot(async snapshot => {
    const data = snapshot.data();
    if (!peerConnection.currentRemoteDescription && data && data.answer) {
      console.log('Got remote description: ', data.answer);
      const rtcSessionDescription = new RTCSessionDescription(data.answer);
      await peerConnection.setRemoteDescription(rtcSessionDescription);
    }
  });
  // Listening for remote session description above

  // Listen for remote ICE candidates below
  roomRef.collection('calleeCandidates').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(async change => {
      if (change.type === 'added') {
        let data = change.doc.data();
        console.log(`Got new remote ICE candidate: ${JSON.stringify(data)}`);
        await peerConnection.addIceCandidate(new RTCIceCandidate(data));
      }
    });
  });
  // Listen for remote ICE candidates above
}

export default {
  name: "startvideo",
  async mounted() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    localStream = stream;
    remoteStream = new MediaStream();
    this.$refs.localVideo.srcObject = stream;
    this.$refs.remoteVideo.srcObject = remoteStream;
    createRoom('demoroom');
  },
};
</script>

<style lang="scss" scoped>
#localVideo {
  width: 30%;
  right: 2rem;
  bottom: 2rem;
  position: absolute;
}

#remoteVideo {
  width: 100%;
  bottom: 0;
}

#videos {
  position: relative;
}
</style>