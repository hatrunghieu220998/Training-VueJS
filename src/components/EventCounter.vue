<template>
  <div>
    <p style="font-size: 30px; font-weight: bold">{{ counter }}</p>
    <button @click="increase">Increase</button>
  </div>
</template>

<script>
export default {
  props: {
    counter: Number,
  },
  methods: {
    increase() {
      this.$emit("increase");
    },
  },
};
</script>

<style></style>
