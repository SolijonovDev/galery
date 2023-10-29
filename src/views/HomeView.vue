<script setup>
import { onMounted } from "vue";
import PhotoList from "../components/PhotoList.vue";
import SearchPanel from "../components/SearchPanel.vue";
import { useHomeView } from "../store/useHomeView";
import Container from "../components/Container.vue";

const homeViewStore = useHomeView();

onMounted(async () => {
  if (homeViewStore.results.length === 0) {
    await homeViewStore.getImages();
  }
});
</script>

<template>
  <search-panel />
  <container class="home-view">
    <template v-if="homeViewStore.status === 'loading'">
      <h2>Loading ...</h2>
    </template>
    <template v-else-if="homeViewStore.status === 'success'">
      <photo-list :items="homeViewStore.results" />
    </template>
    <template v-else>
      <h2>Something went wrong</h2>
    </template>
  </container>
</template>

<style lang="scss" scoped>
.home-view {
  width: 100%;
}
</style>
