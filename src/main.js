import Vue from "vue";

// Buefy
import Buefy from "buefy";

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
    path: "/getting_started",
    name: "GettingStarted",
    component: loadView("GettingStarted"),
    meta: {
      title: "...",
    },
  },
  {
    path: "/consulting",
    name: "Consulting",
    component: loadView("Consulting"),
    meta: {
      title: "...",
    },
  },
  {
    path: "/mentors",
    name: "Mentors",
    component: loadView("Mentors"),
    meta: {
      title: "...",
    },
  },
  {
    path: "/sessions",
    name: "Sessions",
    component: loadView("Sessions"),
    meta: {
      title: "...",
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

const title_append = "- Be You";
router.beforeEach((to, from, next) => {
  const customTitle = to.matched
    .slice()
    .reverse()
    .find((record) => record.meta && record.meta.title);

  document.title = `${customTitle ? customTitle.meta.title : ""} ${title_append}`;

  next();
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

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
