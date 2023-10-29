import { defineStore } from "pinia";
import { Api } from "../https";

export const useDetails = defineStore("details", {
  state: () => ({
    status: "",
    data: {},
  }),
  getters: {
    getData: state => state.data,
  },
  actions: {
    async getImage(imageId) {
      try {
        this.status = "loading";
        const data = await Api.getImage(imageId);
        this.data = data;
        this.status = "success";
      } catch (e) {
        this.status = "error";
      }
    },
  },
});
