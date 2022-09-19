<template>
  <h1>Lắng nghe sự kiện trên DOM</h1>
  <button v-on:click="counter += 1">Click</button>
  <p>Bạn vừa click vào button lần thứ {{ counter }}</p>
  <br />
  <h1>Method Event Handlers</h1>
  <button v-on:click="greet('Hello')">Chào mừng</button>
  <br />
  <h1>Event Modifiers</h1>
  <form action="" v-on:submit.prevent="warn()">
    <input type="text" placeholder="nhập vào tên..." />
    <button type="submit">Click</button>
  </form>
  <br />
  <h1>Key Modifiers</h1>
  <form action="">
    <input
      type="text"
      placeholder="nhập vào tên..."
      v-on:keyup.space="keyClick()"
    />
    <button type="submit">Click</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      name: "Hiếu",
    };
  },
  methods: {
    greet(message) {
      alert(message);
    },
    warn() {
      alert("Bạn vừa thực hiện submit form, nhưng đã bị prevent");
    },
    keyClick() {
      alert("Bạn vừa nhấn space");
    },
  },
};
</script>

<style></style>
