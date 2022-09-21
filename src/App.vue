<template>

  <h1>App Component</h1>
  <h2>Demo keep-alive component</h2>

  <ul class="tabs">
    <li>
      <button type="button" v-on:click="currentTab = 'posts'">Posts</button>
      <button type="button" v-on:click="currentTab = 'archive'">Archive</button>
    </li>
  </ul>
  <keep-alive include="posts,archive">
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
  
</template>
<script>

  export default {
    data(){
      return {
        currentTab: 'posts'
      }
    },
    methods: {
    
    },
    computed: {
      currentTabComponent(){
        return `tab-${this.currentTab}`
      }
    }
  }
 
</script>
<style scoped>

  .tabs{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tabs li{}
  .tabs button{
    border: 1px solid grey;
    padding: 10px 20px;
    cursor: pointer;
  }


</style>

<!-- 
  Tại sao lại cần keep-alive?
  Trong hầu hết các trường hợp, việc render và unmounted là cần thiết thì cũng có những lúc ta cần cache lại state của component như:
  + Caching user input forms từ người dùng
  + Component gọi api nhiều lần và chỉ muốn gọi chúng một lần đầu tiên
  + Component cần phải tính toán phức tạp trong data() & computed nên chỉ muốn tính toán chúng 1 lần để những lần sau chỉ việc sử dụng lại, giúp làm tăng tốc độ 

 -->
