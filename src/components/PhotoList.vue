<script setup>
import ListItem from "./ListItem.vue";

defineProps(["items"]);
</script>

<template>
  <div>
    <div class="items">
      <template v-for="item in items" :key="item.id">
        <ListItem :item="item" />
      </template>
    </div>
    <template v-if="items.length === 0">
      <h2 class="text">Nothing</h2>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
.text {
  text-align: center;
}
</style>
