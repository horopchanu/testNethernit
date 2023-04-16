import { defineStore } from "pinia";
export const useIndex = defineStore("index", {
  state: () => ({
    showModal: false,
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
  },
});
