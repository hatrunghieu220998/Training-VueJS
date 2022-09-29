<template>
  <div class="container">
    <h1>1. Computed</h1>
    <p>
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
    </p>
    <p>chúng ta dùng computed khi:<br />
      + Muốn tạo 1 data mới dựa trên các data đã có trước đó<br />
      + Muốn thực thi chỉ khi data cụ thể được thay đổi<br />
      + Muốn xử lý hoặc sắp xếp nhiều data cùng 1 lúc
    </p>
    <h1>2. Methods</h1>
    <p>Methods là tập hợp những functions, giống những functions bình thường trong JS<br />
      Methods thường được dùng để xử lý khi bắt sự kiện với DOM. hoặc đơn giản là để tái sử dụng code (khi 1 đoạn code logic được dùng đi dùng lại ở nhiều chỗ).<br /> Methods cho phép truyền vào tham số.
    </p>
    <p>methods có 2 cách sử dụng:<br/>
      + Dùng để bắt sự kiện<br />
      + Dùng để thực thi khi data thay đổi
    </p>
    <p>methods chỉ sử dụng khi:<br/>
      + Thực thi logic khi bắt các sự kiện<br />
      + Chỉ sử dụng thực thi khi data thay đổi khi bạn thực sự muốn thực thi method đó mỗi khi re-render HTML.<br />
      + Dùng khi đoạn logic lặp lại nhiều lần trong project, không thể dùng 2 thành phần còn lại
    </p>
    <h1>3. Watcher</h1>
    <p>Watcher dùng khi bạn muốn lắng nghe sự thay đổi của 1 data và thực thi khi data đó thay đổi, nhưng không làm thay đổi giá trị data đó. <br />
      Nó sẽ hữu ích khi chúng ta validate dữ liệu người dùng nhập vào
    </p>
    <p>Watcher dùng khi:<br />
      + Muốn lắng nghe, theo dõi sự thay đổi của 1 data cụ thể<br />
      + Muốn thực thi 1 đoạn logic nào đó khi data đó thay đổi, hoặc thay đổi đến 1 giá trị nào đó
    </p>
    <h3>Value of A: {{ addA }}</h3>
    <h3>Value of B: {{ addB }}</h3>
    <h3>Value of A: {{ addAMethod() }}</h3>
    <h3>Value of B: {{ addBMethod() }}</h3>
    <button @click="a++">Add A</button>
    <br />
    <br />
    <div>
      <button @click="increase()">Increase</button>
      <p>{{counter}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
      b: 1,
      counter: 0,
    };
  },
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
    increase() {
     this.b ++
    },
    winner() {
     alert("hello")
    },
  },
  watch: {
    b(val) {
      if(val >= 5) {
         this.winner()
      }
    }
  },
};

</script>
<style scoped>
  h1 {
  color: blue;
}
</style>
