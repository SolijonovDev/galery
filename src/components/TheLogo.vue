<script setup>
import LogoSvg from "./Svg/LogoSvg.vue";
import MobileLogo from "./Svg/MobileLogo.vue";
</script>

<template>
  <router-link to="/">
    <span class="logo">
      <LogoSvg />
    </span>
    <span class="mobile-logo">
      <MobileLogo />
    </span>
  </router-link>
</template>

<style scoped lang="scss">
.logo {
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
}
.mobile-logo {
  display: block;
  @media (min-width: 600px) {
    display: none;
  }
}
</style>
