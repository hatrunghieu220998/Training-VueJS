<template>
  <button @click="onComputed()">Computed</button>
  <button @click="onHandlingEvents()">Event handling</button>
  <button @click="onRefsTemplate()">Refs</button>
  <button @click="onEvents()">Events</button>
  <button @click="onComposable()">Composable</button>
</template>

<script>
export default {
  name: "main-screen",
  methods: {
    onComputed() {
      this.$emit("onComputed");
    },
    onHandlingEvents() {
      this.$emit("onHandlingEvents");
    },
    onRefsTemplate() {
      this.$emit("onRefsTemplate");
    },
    onEvents() {
      this.$emit("onEvents");
    },
    onComposable() {
      this.$emit("onComposable");
    },
  },
};
</script>

<style scoped>
button {
  display: inline-block;
  background-color: #333;
  color: #fff;
  box-sizing: border-box;
  padding: 30px;
  border: #fff 1px solid;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #fff;
  color: #333;
  border: #333 solid 1px;
}
</style>
>
