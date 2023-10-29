import { defineStore } from "pinia";

export const useFavorites = defineStore("favorites", {
  state: () => ({
    ids: [],
    favorites: [],
  }),
  getters: {
    getFavorites: state => state.favorites,
  },
  actions: {
    addToFavorites(item) {
      const itemId = item.id;

      if (this.ids.includes(itemId)) {
        this.favorites = this.favorites.filter(item => item.id != itemId);
        this.ids = this.ids.filter(id => id != itemId);
      } else {
        this.ids.push(itemId);
        this.favorites.push(item);
      }
    },
    checkToFavorites(imageId) {
      return this.ids.includes(imageId);
    },
  },
});
