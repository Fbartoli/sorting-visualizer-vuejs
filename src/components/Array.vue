<template>
  <div>
    <h2>Bubble sort</h2>
    <div id="horizontal">
      <div v-for="item in array" :key="item.id">
        <div
          :style="{
            height: item + 'px',
            width: width + 'px'
          }"
          class="containerBar"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    width: {
      type: Number,
      default: 10
    }
  },
  computed: mapState({
    array: state => state.array
  }),
  screenSize: window.innerWidth
};
</script>

<style>
#horizontal {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #333232;
  display: flex;
  align-items: flex-end;
}
.containerBar {
  background-color: #ed254e;
  border: solid 1px #333232;
  width: 50px;
}
</style>
