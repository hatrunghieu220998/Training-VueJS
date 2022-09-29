<template>
<div>
      <h1>Các cách binding data trong vue</h1>
      <p><button @click="count++">click</button>OneWay binding: {{count}}</p>
      <input type="text" v-model="messege">
      <p>TwoWay binding: {{messege}}</p>
</div>
<div>
  <h1>component có 4 cách truyền dữ liệu</h1>
  <Counter msg="cách 1: truyền dữ liệu data từ component cha xuống component con thông qua props" />
  <br />
  <p>cách 2: Truyền từ component con lên component cha thông qua Emit</p>
  <ComponentFirst @inputData="updateMessage" />
  <h4>{{messenger}}</h4>
  <a href="https://co-well.vn/nhat-ky-cong-nghe/lam-the-nao-de-truyen-du-lieu-giua-cac-component-trong-vuejs/">Link tham khảo</a>
    <p>cách 3: Truyền giữa các component không có quan hệ thông qua Event bus</p>
    <p>cách 4: Sử dụng Store của VueX</p>
</div>
</template>

<script>
  import Counter from './Counter.vue'
  import ComponentFirst from './ComponentFirst.vue'

  export default {
    components: {
      Counter,
      ComponentFirst,
    },
    data() {
      return {
        count: 0,
        messege: "",
        messenger: 'messenger default !',
      }
    },
    methods: {
      updateMessage(mes) {
        this.messenger = mes
      }
    },
  }
</script>

<style scoped>

h1 {
  color: blue;
}
</style>
