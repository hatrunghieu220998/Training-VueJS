<template>
  <div class="demo">
    <h1>KeepAlive</h1>
    <p>KeepAlive: là 1 component tích hợp cho phép chúng ta lưu trữ có điều kiện các cá thể component khi chuyển đổi động giữa nhiều component.</p>
    <label><input type="radio" v-model="current" value="CurrentA" /> A</label>
    <label><input type="radio" v-model="current" value="CurrentB" /> B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>

<script>
   import CurrentA from './CurrentA.vue'
  import CurrentB from './CurrentB.vue'
export default {
  components: {
      CurrentA,
      CurrentB,
    },
    data() {
      return {
        current: 'CurrentA',
      }
    },
  methods: {
    increase() {
      this.$emit("increase");
    },
  },
};
</script>

<style scoped>
  h1 {
  color: blue;
}
</style>
