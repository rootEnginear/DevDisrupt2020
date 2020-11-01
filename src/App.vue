<template>
  <div id="app">
    <app-navbar />
    <transition name="routerview" mode="out-in">
      <router-view />
    </transition>
    <app-go-top />
  </div>
</template>

<script>
import AppGoTop from "@/components/AppGoTop.vue";
import AppNavbar from "@/components/AppNavbar.vue";

export default {
  name: "app",
  components: {
    AppGoTop,
    AppNavbar,
  },
};
</script>

<style lang="scss">
@import "./css/variables";
@import "~bulma";
@import "~buefy/src/scss/buefy";

body {
  letter-spacing: 0.2px;
}

.container {
  width: 90%;
}

.nobr {
  display: inline-block;
  white-space: nowrap;
}

.navbar-brand > a {
  padding: 0 0.75rem;

  > img {
    max-height: 2.5rem;
  }
}

.routerview-enter-active {
  transition: opacity 0.5s cubic-bezier(0, 0, 0.2, 1),
    transform 0.5s cubic-bezier(0, 0, 0.2, 1);
}
.routerview-leave-active {
  transition: opacity 0.5s cubic-bezier(0.4, 0, 1, 1),
    transform 0.5s cubic-bezier(0.4, 0, 1, 1);
}
// Slide for router-view
.routerview-enter-active,
.routerview-leave-active,
.routerview-enter,
.routerview-leave-to {
  position: fixed;
  top: 3.25rem;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: top left;
}
.routerview-leave-to {
  transform: translateX(-100vw);
}
.routerview-enter {
  transform: translateY(100vh);
}
.routerview-leave-to,
.routerview-enter {
  opacity: 0;
}
</style>
