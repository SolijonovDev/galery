import { defineStore } from "pinia";
import { Api } from "../https/index";

export const useHomeView = defineStore("main", {
  state: () => ({
    status: "",
    results: [],
  }),
  getters: {
    getData: state => state.results,
  },
  actions: {
    async getImages(value) {
      if (!value) value = "cars";
      try {
        this.status = "loading";
        const res = await Api.getImages(value);
        this.results = res.results;
        this.status = "success";
      } catch (e) {
        console.log("error: ", e);
        this.status = "error";
      }
    },
  },
});
