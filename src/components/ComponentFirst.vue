<template>
    <div>
    <input 
      placeholder="Enter Text Here"
      v-model="tempMessage"
    />
    <button @click="sendMessage">Emit event</button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      tempMessage: ''
    }
  },
  methods: {
    sendMessage() {
      this.$emit("inputData", this.tempMessage);
      this.tempMessage = '';
    }
  }
}
</script>
