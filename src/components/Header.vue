<template>
  <ul>
    <li><RouterLink to="/">VueLifecycle</RouterLink></li>
    <li><RouterLink to="/Computed">Computed-methods-watcher</RouterLink></li>
    <li><RouterLink to="/Routing">Routing</RouterLink></li>
    <li><RouterLink to="/KeepAlive">KeepAlive</RouterLink></li>
    <li><RouterLink to="/teleport">teleport</RouterLink></li>
    <li><RouterLink to="/Test">Test</RouterLink></li>
  </ul>
</template>
<style  scoped>
ul {
  display: flex;
  justify-content: space-around;
}
li {
  list-style: none;
}
</style>

