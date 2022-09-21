<template>
  <div class="notifications">
    <button @click="notie_success('Success!')">Click Success</button>
    <button @click="notie_warning('Warning!')">Click Warning</button>
    <button @click="notie_error('Error!')">Click Error</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    msg: String,
  },
};
</script>