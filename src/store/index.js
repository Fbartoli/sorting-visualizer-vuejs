import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

function swap(array, i, j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

export default new Vuex.Store({
  state: {
    array: [],
    isSorting: false
  },
  mutations: {
    SET_ARRAY(state, newArray) {
      state.array = [];
      state.array = newArray;
    },
    SET_SORTED(state, bool) {
      state.isSorting = bool;
    }
  },
  actions: {
    generateRandomArray({ commit }, width) {
      let array = Array.from({ length: window.innerWidth / width + 0.08 }, () =>
        Math.floor(Math.random() * 1000)
      );
      commit("SET_ARRAY", array);
      commit("SET_SORTED", false);
    },
    sort({ dispatch }, sort, delay) {
      if (sort === "Bubble sort") {
        dispatch("bubbleSort", delay);
      } else if (sort === "Selection sort") {
        dispatch("selectionSort", delay);
      } else if (sort === "Insertion sort") {
        dispatch("insertionSort", delay);
      }
    },
    async bubbleSort({ commit, state }, delay) {
      let arrayToSort = state.array;
      let swapped = true;
      commit("SET_SORTED", true);
      while (swapped === true) {
        swapped = false;
        for (let index = 0; index < arrayToSort.length; index++) {
          if (arrayToSort[index] > arrayToSort[index + 1]) {
            let tmp = arrayToSort[index];
            arrayToSort[index] = arrayToSort[index + 1];
            arrayToSort[index + 1] = tmp;
            swapped = true;
          }
          await sleep(delay);
          commit("SET_ARRAY", arrayToSort);
        }
      }
      commit("SET_SORTED", false);
    },
    async selectionSort({ commit, state }, delay) {
      let arrayToSort = state.array;
      let sortedArrayEnd = 0;
      let lowest = sortedArrayEnd;
      commit("SET_SORTED", true);
      for (let i = 0; i < arrayToSort.length; i++) {
        if (arrayToSort[lowest] > arrayToSort[i]) lowest = i;
        if (i === arrayToSort.length - 1) {
          swap(arrayToSort, lowest, sortedArrayEnd);
          i = sortedArrayEnd;
          sortedArrayEnd++;
          lowest = sortedArrayEnd;
        }
        await sleep(delay);
        commit("SET_ARRAY", arrayToSort);
      }
      commit("SET_SORTED", false);
    },
    async insertionSort({ commit, state }, delay) {
      let arrayToSort = state.array;
      let r = 1;
      commit("SET_SORTED", true);
      while (r !== arrayToSort.length) {
        let tracker = r;
        while (arrayToSort[tracker] < arrayToSort[tracker - 1]) {
          swap(arrayToSort, tracker, tracker - 1);
          tracker--;
          await sleep(delay);
          commit("SET_ARRAY", arrayToSort);
        }
        r++;
      }
      commit("SET_SORTED", false);
    }
  },
  modules: {}
});
