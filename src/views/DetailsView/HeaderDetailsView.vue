<script setup>
import HeardSvg from "../../components/Svg/Heard.vue";
import DownloadSvg from "../../components/Svg/Download.vue";
import { useRoute } from "vue-router";
import { useFavorites } from "../../store/useFavorites";

const route = useRoute();
const favoritesStore = useFavorites();
</script>

<template>
  <div class="detils_header">
    <div class="profile">
      <img src="../../assets/profile.png" />
      <span
        >Vincent van Gogh <br />
        @vincentvangogh</span
      >
    </div>
    <div class="btns">
      <button class="favorites_btn" @click="$emit('clc')">
        <HeardSvg
          :isFavorite="favoritesStore.checkToFavorites(route.params.id)"
        />
      </button>
      <button class="download_btn">
        <DownloadSvg /> <span>Downloand</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detils_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
}

.profile {
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;

    @media (min-width: 600px) {
      width: 55px;
      height: 55px;
      margin-right: 20px;
    }
  }

  span {
    line-height: 16.09px;
    font-size: 14px;
    font-weight: 400;
    color: #fff;

    @media (min-width: 600px) {
      line-height: 21.09px;
      font-size: 18px;
    }
  }
}

.btns {
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
}
.favorites_btn {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    width: 50px;
    height: 50px;
  }
}
.download_btn {
  margin-left: 10px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 242, 0, 1);
  border: 1px solid rgba(255, 242, 0, 1);
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    height: 50px;
    width: 200px;
    margin-left: 25px;
  }

  span {
    display: none;

    @media (min-width: 600px) {
      margin-left: 15px;
      display: block;
    }
  }
}
</style>
