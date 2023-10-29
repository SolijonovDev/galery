<script setup>
import TheHeader from "./TheHeader.vue";
</script>

<template>
  <div class="layout">
    <TheHeader />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
