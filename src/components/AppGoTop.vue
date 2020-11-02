<template>
  <transition name="gotop">
    <b-button
      v-if="display_gotop_btn"
      tag="a"
      id="gotop"
      href="#app"
      type="is-primary"
      rounded
      v-smooth-scroll
    >
      <span class="is-hidden-tablet">กลับขึ้นด้านบน</span>
    </b-button>
  </transition>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  name: "AppGoTop",
  created() {
    this.handleScroll = debounce(() => {
      this.display_gotop_btn = window.scrollY >= 60;
    }, 500);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      display_gotop_btn: false,
      handleScroll: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables";

#gotop {
  position: fixed;
  bottom: 5vh;
  right: 2.5vw;
  z-index: 10;

  &::after {
    width: 10px;
    transform: rotate(45deg);
    transform-origin: center center;
    margin: 0.1rem 0;
    height: 10px;
    display: block;
    content: "";
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    position: absolute;
  }

  @media screen and (max-width: 769px) {
    bottom: 0;
    left: 0;
    right: 0;
    background: #000000d9;
    color: #fff;
    border: none;
    border-radius: 0;

    &:focus:not(:active) {
      box-shadow: 0 0 0 0.125em rgba(0, 0, 0, 0.25);
    }

    &::after {
      margin: 0.25rem 1rem 0;
      position: static;
    }
  }

  @media print {
    display: none;
  }
}

.gotop-enter-active {
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}
.gotop-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.gotop-enter,
.gotop-leave-to {
  transform: translateY(5vh) translateY(100%);
}
</style>