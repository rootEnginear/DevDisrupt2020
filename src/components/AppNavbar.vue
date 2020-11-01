<template functional>
  <b-navbar fixed-top wrapper-class="container" :shadow="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img src="@/assets/logo_512.png" alt="Be YOU" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/">หน้าหลัก</b-navbar-item>
      <b-navbar-item tag="router-link" to="/mentors">เมนเทอร์</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-dropdown right boxed arrowless>
        <template slot="label">
          <span class="icon">
            <i class="fas fa-comment"></i>
          </span>
        </template>
        <b-navbar-item tag="router-link" to="/consulting"
          >💁‍♀️ ที่ปรึกษาของคุณพร้อมแล้ว คลิกเพื่อเข้าห้อง</b-navbar-item
        >
      </b-navbar-dropdown>
      <b-navbar-item>
        <span class="icon">
          <i class="fas fa-bell"></i>
        </span>
      </b-navbar-item>
      <b-navbar-dropdown right boxed>
        <template slot="label">
          <figure class="image is-32x32">
            <img class="is-rounded" src="@/assets/prof.png" />
          </figure>
        </template>
        <b-navbar-item href="#">โพรไฟล์</b-navbar-item>
        <b-navbar-item tag="router-link" to="/sessions"
          >ประวัติการปรึกษา</b-navbar-item
        >
        <hr class="navbar-divider" />
        <b-navbar-item href="#">ล็อกเอาท์</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>