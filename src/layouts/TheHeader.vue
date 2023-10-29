<script setup>
import Container from "../components/Container.vue";
import TheLogo from "../components/TheLogo.vue";
import FavoritesBtn from "../components/FavoritesBtn.vue";
import SearchSvg from "./SearchSvg.vue";
</script>

<template>
  <header class="header">
    <Container class="container">
      <TheLogo />
      <div class="icons">
        <div class="search_panel">
          <SearchSvg />
          <span>Поиск</span>
        </div>
        <FavoritesBtn />
      </div>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #000;
}

.container {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 600px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media (min-width: 750px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

.icons {
  display: flex;
  align-items: center;
}

.search_panel {
  display: flex;
  align-items: center;
  margin-right: 25px;
  span {
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    margin-left: 10px;
    display: none;
    @media (min-width: 600px) {
      display: block;
    }
  }
}
</style>
