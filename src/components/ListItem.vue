<script setup>
defineProps(["item"]);
</script>

<template>
  <router-link :to="'/details/' + item.id">
    <div class="list-item">
      <img :src="item.urls.small" height="100%" alt="logo" className="logo" />
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.list-item {
  aspect-ratio: 473/440;
  border-radius: 8px;
}
img {
  border-radius: inherit;
  width: 100%;
  height: 100%;
}
</style>
