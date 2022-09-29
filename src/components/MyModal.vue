<script>
  export default {
    data() {
      return {
        open: false
      }
    }
  }
  </script>
  
  <template>
    <button @click="open = true">Open Modal</button>
    <Teleport to="#app">
      <div v-if="open" class="modal">
        <p>this is teleport</p>
        <button @click="open = false" class="modal-btn">X</button>
      </div>
    </Teleport>
  </template>
  
  <style scoped>
  .modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    background: #ccc;
    width: 30%;
    border-radius: 5px;
    height: 30%;
  }
  .modal-btn {
    position: relative;
    top: -28%;
    left: 92%;
  }
  p {
    padding: 20px;
  }
  </style>
  