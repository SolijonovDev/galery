<script setup>
import FavoritesSvg from "./Svg/FavoritesSvg.vue";
import MobileFavoritesSvg from "./Svg/MobileFavoritesSvg.vue";
</script>

<template>
  <router-link to="/favorites">
    <span class="logo">
      <FavoritesSvg />
    </span>
    <span class="mobile-logo">
      <MobileFavoritesSvg />
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
