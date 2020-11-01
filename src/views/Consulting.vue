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
// const configuration = {
//   iceServers: [
//     {
//       urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
//     },
//   ],
//   iceCandidatePoolSize: 10,
// };

// let peerConnection = null;

// let localStream = null;
// let remoteStream = null;

// let roomId = "demoroom";

export default {
  async mounted() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    this.$refs.localVideo.srcObject = stream;
    this.$refs.remoteVideo.srcObject = stream;
  },
};
</script>

<style lang="scss" scoped>
#localVideo {
  width: 100%;
  bottom: 0;
}

#remoteVideo {
  width: 30%;
  right: 2rem;
  bottom: 2rem;
  position: absolute;
}

#videos {
  position: relative;
}
</style>