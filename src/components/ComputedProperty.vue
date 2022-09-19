<template>
  <div class="container">
    <h2>
      Computed có thể có nhiều thuộc tính bên trong, một thuộc tính là 1
      function, không nhận tham số truyền vào được tính toán dựa trên dữ liệu có
      sẵn trong data. <br />
      Computed mặc dù khai báo giống như một hàm tuy nhiên sẽ được lưu lại trong
      Vue (Cached), hàm này chỉ được thực thi khi có bất kỳ sự thay đổi trong dữ
      liệu data. <br />
      Methods run không mong muốn. Khi có bất kỳ sự thay đổi nào Vue sẽ render
      lại template và khi gặp lời gọi hàm "()" thì sẽ luôn luôn chạy lại hàm đó.
      <br />
      Computed thực hiện như một function nhưng nó chỉ được coi là một
      properties. <br />
      Computed sẽ được thực hiện trước methods.
    </h2>
    <h3>Value of A: {{ addA }}</h3>
    <h3>Value of B: {{ addB }}</h3>
    <h3>Value of A: {{ addAMethod() }}</h3>
    <h3>Value of B: {{ addBMethod() }}</h3>
    <button @click="a++">Add A</button>
    <button @click="b++">Add B</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
      b: 1,
    };
  },
  name: "Computed-property",
  // Computed có thể có nhiều thuộc tính bên trong, một thuộc tính là 1 function, được tính toán dựa trên dữ liệu có sẵn trong data
  // Computed mặc dù khai báo giống như một hàm tuy nhiên sẽ được lưu lại trong Vue (Cached), hàm này chỉ được thực thi khi có bất kỳ sự thay đổi trong dữ liệu data
  // methods run không mong muốn. Khi có bất kỳ sự thay đổi nào Vue sẽ render lại template và khi gặp lời gọi hàm "()" thì sẽ luôn luôn chạy lại hàm đó
  // Computed thực hiện như một function nhưng nó chỉ được coi là một properties
  // Computed sẽ được thực hiện trước methods
  computed: {
    addA() {
      console.log("computed called");
      console.log("addA called");
      return this.a;
    },
    addB() {
      console.log("computed called");
      console.log("addB called");
      return this.b;
    },
  },
  methods: {
    addAMethod() {
      console.log("methods called");
      console.log("addA called");
      return this.a;
    },
    addBMethod() {
      console.log("methods called");
      console.log("addB called");
      return this.b;
    },
  },
};
/* eslint-disable */
</script>
<style></style>
