<template>
  <ul>
    <li><RouterLink to="/">Tuan</RouterLink></li>
    <li> <RouterLink to="/Props">Props</RouterLink></li>
    <li><RouterLink to="/Provide">Provide / inject </RouterLink></li>
    
    
  </ul>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style>
  ul{
    display: flex;
    list-style-type: none;

  }
  li{
    margin: 0 50px;
    color: black;
    font-weight: 600;
    text-decoration: none;
  }
</style>
