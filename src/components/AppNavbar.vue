<template functional>
  <b-navbar fixed-top wrapper-class="container" :shadow="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img src="@/assets/logo_512.png" alt="Be YOU" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/">หน้าหลัก</b-navbar-item>
      <b-navbar-item tag="router-link" to="/consulting">
        Consulting
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/mentors">Mentors</b-navbar-item>
      <b-navbar-item tag="router-link" to="/sessions">Sessions</b-navbar-item>
    </template>

    <!-- <template slot="end">
      <b-navbar-item tag="div">
        <router-link
          to="/getting_started"
          class="button is-primary is-outlined"
        >
          เริ่มค้นหาตัวเอง
        </router-link>
      </b-navbar-item>
    </template> -->
  </b-navbar>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>