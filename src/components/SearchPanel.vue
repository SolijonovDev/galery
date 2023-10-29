<script setup>
import { ref, watch } from "vue";
import { useHomeView } from "../store/useHomeView";
import lodash from "lodash";

const initialSearchText = sessionStorage.getItem("search_text");
const search = ref(initialSearchText);

const store = useHomeView();

let debounce_fun = lodash.debounce(() => {
  sessionStorage.setItem("search_text", search.value);
  store.getImages(search.value);
}, 1000);

watch(search, () => {
  debounce_fun();
});
</script>

<template>
  <div class="search-panel">
    <div class="search-block">
      <input v-model="search" placeholder="Поиск" />
      <button>
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.8596 22.1821L15.8614 15.1838C17.315 13.5699 18.2084 11.442 18.2084 9.10414C18.2083 4.08416 14.1242 0 9.10418 0C4.08416 0 0 4.08416 0 9.10418C0 14.1242 4.08416 18.2084 9.10418 18.2084C11.442 18.2084 13.5699 17.315 15.1839 15.8614L22.1821 22.8596C22.2756 22.9532 22.3983 23 22.5209 23C22.6435 23 22.766 22.9532 22.8597 22.8596C23.0468 22.6724 23.0468 22.3692 22.8596 22.1821ZM9.10418 17.25C4.61294 17.25 0.958363 13.5959 0.958363 9.10418C0.958363 4.61249 4.61294 0.958318 9.10418 0.958318C13.5954 0.958318 17.25 4.61244 17.25 9.10418C17.25 13.5959 13.5954 17.25 9.10418 17.25Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-panel {
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/search-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 268px;
}

.search-block {
  width: 60%;
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 600px) {
    width: 80%;
  }

  @media (min-width: 900px) {
    width: 60%;
  }

  input {
    width: 100%;
    display: block;
    outline: none;
    border: none;
    padding: 10px;
    font-size: 24px;

    @media (min-width: 600px) {
      padding: 15px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    margin-right: 10px;
  }
}
</style>
