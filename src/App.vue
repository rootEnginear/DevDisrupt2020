<template>
  <div id="app">
    <app-navbar />
    <router-view />
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

.container {
  width: 90%;
}

.nobr {
  display: inline-block;
  white-space: nowrap;
}
</style>
