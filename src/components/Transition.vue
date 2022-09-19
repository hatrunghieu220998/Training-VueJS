<template>
  <div class="container">
    <h2>Transition</h2>
    <hr />
    <button class="btn btn-block btn-success" @click="show = !show">
      Show notifications
    </button>
    <br />
    <br />
    <div class="alert alert-success" v-if="show">
      This is something about notifications.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.btn {
  padding: 20px;
}

.alert {
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: auto;
  border-radius: 3px;
  box-shadow: 1px 1px 10px #333;
}

.alert-success {
  background-color: green;
}
</style>
