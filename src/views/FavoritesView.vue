<script setup>
import Container from "../components/Container.vue";
import PhotoList from "../components/PhotoList.vue";
import { useFavorites } from "../store/useFavorites";

const favoritesStore = useFavorites();
</script>

<template>
  <Container>
    <h1 class="title">Избранное</h1>
    <photo-list :items="favoritesStore.favorites" />
  </Container>
</template>

<style lang="scss" scoped>
.title {
  font-size: 36px;
  line-height: 42px;
  color: #000;
  padding: 50px 0;
  text-align: center;
  font-weight: 700;

  @media (min-width: 700px) {
    font-size: 72px;
    line-height: 84px;
    padding: 80px 0;
  }
}
</style>
