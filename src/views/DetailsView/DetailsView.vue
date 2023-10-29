<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useDetails } from "../../store/useDetails";
import Container from "../../components/Container.vue";
import HeaderDetailsView from "./HeaderDetailsView.vue";
import { useFavorites } from "../../store/useFavorites";

const route = useRoute();

const store = useDetails();
const favorites = useFavorites();

onMounted(async () => {
  await store.getImage(route.params.id);
});

const addToFavorites = () => {
  favorites.addToFavorites(store.data);
};
</script>

<template>
  <div class="details-view">
    <Container>
      <HeaderDetailsView @clc="addToFavorites" />
      <template v-if="store.status === 'loading'">
        <h2>Loading ....</h2>
      </template>
      <template v-else>
        <template v-if="store.data && store.data.urls">
          <div class="big_photo">
            <img :src="store.data.urls.small" />
          </div>
        </template>
      </template>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.details-view {
  width: 100%;
  margin-bottom: 80px;

  @media (min-width: 600px) {
    background-image: url("../../assets/details-background.png");
    background-repeat: no-repeat;
    background-size: 100% 80%;
  }
}
.big_photo {
  width: 100%;
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
