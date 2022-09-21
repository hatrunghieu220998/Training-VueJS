<template>
  <div class="alert alert-danger">Dangerous message!</div>
</template>
<script>
export default {};
</script>
<style scoped>
.alert {
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 10px #333;
}
.alert-danger {
  background-color: red;
}
</style>
