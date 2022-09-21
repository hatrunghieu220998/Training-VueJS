<template>
  <div class="input-form">
        <input type="text" placeholder="Enter your email" v-model="message">
        <p>{{message}}</p>
      </div>
</template>

<script>
  export default {
    name: 'input-form',
    data(){
      console.log('data input form');
      return {
        message: ''

      }
    },
    created() {
        console.log("Created input form");
    },
    methods: {},
    beforeMount() {
        console.log("beforeMounted input form");
    },
    mounted() {
        console.log("Mounted input form");
    },
    beforeUpdate() {
        console.log("Before updated input form");
    },
    updated() {
        console.log("Updated input form");
    },
    beforeUnmount(){
      console.log('Before unmounted input form');
    },
    unmounted(){
      console.log('Unmounted input form');
    },
    activated(){
      console.log('activated input form');
      this.message = ''
    },
    deactivated(){
      console.log('deactivated input form');
    }
    
  }
</script>

<style scoped>
  .input-form{}
  .input-form input{
    padding: 5px 10px;
    min-width: 300px;
  }
</style>