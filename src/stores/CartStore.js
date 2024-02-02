import { defineStore } from "pinia";
import { groupBy } from "lodash";
import { useAuthUserStore } from "./AuthUserStore";
export const useCartStore = defineStore("cartStore", {
  state: () => {
    return {
      items: [],
    };
  },
  getters: {
    // count() {
    //   return this.items.length;
    // },
    count: (state) => state.items.length,
    // isEmpty() {
    //   return this.count === 0;
    // },
    isEmpty: (state) => state.count === 0,
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    groupCount: (state) => (name) => state.grouped[name].length,
    total: (state) => state.items.reduce((p, c) => p + c.price, 0),
  },
  actions: {
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(
        `${authUserStore.username} bought a total ${this.count} items of a total amount of $ ${this.total}`
      );
    },
    addItems(count, item) {
      count = parseInt(count);
      for (let i = 0; i < count; i++) {
        this.items.push({ ...item });
      }
    },
    clearItem(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },

    setItemCount(item, count) {
      this.clearItem(item.name);
      this.addItems(count, item);
    },
  },
});
