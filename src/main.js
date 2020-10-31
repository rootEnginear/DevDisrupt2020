import Vue from "vue";

// Buefy
import Buefy from "buefy";
import { Dialog } from "buefy/dist/components/dialog";

Vue.use(Buefy, {
  defaultIconPack: "fa",
  defaultDayNames: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
  defaultMonthNames: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ],
  defaultDialogConfirmText: "ตกลง",
  defaultDialogCancelText: "ยกเลิก",
});

// VueRouter
import VueRouter from "vue-router";
Vue.use(VueRouter);

function loadView(view) {
  return () => import(`./views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadView("Home"),
    meta: {
      title: "หน้าหลัก",
    },
  },
  {
    path: "/about",
    name: "About",
    component: loadView("About"),
    meta: {
      title: "เกี่ยวกับ",
    },
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // const currentUser = firebase.auth().currentUser;
  // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // const requiresAdminPrivilege = to.matched.some(
  //   record => record.meta.requiresAdminPrivilege
  // );
  const customTitle = to.matched
    .slice()
    .reverse()
    .find((record) => record.meta && record.meta.title);

  document.title = `${customTitle ? `- ${customTitle.meta.title} ` : ": BE-U"}`;

  next();

  // if (requiresAuth && !currentUser) {
  //   // ถ้าจะเข้าหน้าที่ต้องล็อกอินแต่ยังไม่ล็อกอิน ก็ปัดตกไปก่อน
  //   next("");
  // } else if (!requiresAuth && currentUser) {
  //   // ถ้าล็อกอินค้าง ให้ล็อกเอาท์
  //   store.dispatch("signout");
  // } else if (requiresAdminPrivilege) {
  //   // ถ้าเป็นหน้าแอดมิน ให้ตรวจว่าเป็นแอดมินหรือเปล่า
  //   if (store.state.currentUserData === null) {
  //     next("");
  //   } else if (store.state.currentUserData.admin) {
  //     next();
  //   } else {
  //     // HACK:
  //     // User กดสมัครมีแค่ 2 ประเภทคือ แอดมินจะเข้า กับ คนจะสมัคร
  //     // ถ้าไม่ใช่แอดมินก็ยืนยันได้เลยว่าจะสมัคร
  //     next("register");
  //   }
  // } else {
  //   next();
  // }
});

// Vuex
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    currentUserData: null,
  },
  mutations: {
    saveCurrentUserData(state, payload) {
      state.currentUserData = payload;
    },
    removeCurrentUserData(state) {
      state.currentUserData = null;
    },
  },
  actions: {
    register(context) {
      let provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().languageCode = "th_TH";
      return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let user = result.user;
          let userDoc = firebase
            .firestore()
            .collection("users")
            .doc(user.uid);
          userDoc
            .get()
            .then((doc) => {
              if (!doc.exists) {
                Dialog.alert(
                  `สิ้นสุดการรับสมัครแล้ว!<br>ขอบคุณที่ให้ความสนใจค่าย ModCom2019 ค่ะ`
                );
              } else {
                context.commit("saveCurrentUserData", doc.data());
                router.push("dashboard");
              }
            })
            .catch((error) => Dialog.alert(`เกิดข้อผิดพลาด: ${error.message}`));
        })
        .catch((error) => Dialog.alert(`เกิดข้อผิดพลาด: ${error.message}`));
    },
    signout(context) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          context.commit("removeCurrentUserData");
          router.push("home");
        })
        .catch((error) => Dialog.alert(`เกิดข้อผิดพลาด: ${error.message}`));
    },
  },
});

// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCFWDHeOtPUsILu-cLWt3gyFTV0ndevO3s",
  authDomain: "be-u-dd2020.firebaseapp.com",
  databaseURL: "https://be-u-dd2020.firebaseio.com",
  projectId: "be-u-dd2020",
  storageBucket: "be-u-dd2020.appspot.com",
  messagingSenderId: "752810062790",
  appId: "1:752810062790:web:6b10cc35bca773baae38c7",
  measurementId: "G-5J4GTVWZ59",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Smooth Scroll
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);

// Init
import App from "./App.vue";

Vue.config.productionTip = false;
let app = "";

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
