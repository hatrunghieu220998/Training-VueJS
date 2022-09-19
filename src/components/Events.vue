<template>
  <h1>Events</h1>
  <h2>Event Object</h2>
  <p>
    Ở trong Vue thì khi chúng ta sử dụng các directive thì auto object này đã
    được pass vào trong hàm xử lý sự kiện để dùng. <br />
    Ta truyền tham số $event khi gọi hàm ở directive sau đó có thể truy cập vào
    mọi thuộc tính trong Event object
  </p>
  <button v-on:click="handleSubmit($event)">Click</button>
  <h2>Custom Events</h2>
  <p>
    Như chúng ta đã biết thì Vue được thiết kế theo hướng component, chính vì
    thế ta có thể làm cho một component emit ra event của chính nó.<br />
    Gọi this.$emit("my-event") từ component con khi chúng ta muốn kích hoạt
    event nào đó để thay đổi data của cha truyền xuống con.
  </p>
  <event-counter @increase="handleEvent()" :counter="counter"></event-counter>
</template>

<script>
import EventCounter from "./EventCounter.vue";
export default {
  data() {
    return {
      counter: 1,
    };
  },
  name: "events-screen",
  components: {
    EventCounter,
  },
  methods: {
    handleSubmit(event) {
      console.log(event.clientX);
    },
    handleEvent() {
      this.counter += 1;
    },
  },
};
</script>

<style></style>
