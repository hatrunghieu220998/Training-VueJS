<template>

  <h1>App Component</h1>
  <h2>Demo keep-alive component</h2>

  <ul class="tabs">
    <li>
      <button type="button" v-on:click="currentTab = 'posts'">Posts</button>
      <button type="button" v-on:click="currentTab = 'archive'">Archive</button>
    </li>
  </ul>
  <keep-alive>
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
