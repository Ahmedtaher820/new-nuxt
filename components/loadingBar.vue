<template>
  <div v-if="loading" class="loading-page">
    <div></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-page > div {
  width: 200px;
  height: 200px;
  border-width: 20px;
  border-style: solid;
  border-color: rgb(61, 91, 172) #eee #eee #eee;
  border-radius: 50%;
  transform: rotate(0deg);
  animation: animate 1.5s infinite normal;
}
@keyframes animate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
