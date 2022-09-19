<template>
  <h1>Template Refs</h1>
  <p>
    Ref là viết tắt của Reference nghĩa là sự tham chiếu.<br />
    Ref sinh ra để khi ta muốn thao tác với một phần tử trên trang web gần tương
    tự như cách ta dùng document.getElementByID() trong JS thuần. <br />
    Ta cũng có thể truyền ref vào components con rồi từ component cha lấy được
    các Data hay các hàm đã được khai báo ở trong component con. <br />
    Trong ref khi ta thay đổi bất kỳ trạng thái nào trong DOM đều không có tính
    chất ghi đè.
  </p>
  <h2 ref="title">Title here...</h2>
  <button @click="onChangeTitle()">Change title</button>
  <br />
  <ref-form ref="formRef" @keyup.enter="handleLogin()"></ref-form>
  <button @click="handleLogin()">Login</button>
</template>

<script>
import RefForm from "./RefForm.vue";
export default {
  methods: {
    onChangeTitle() {
      this.$refs.title.innerText = "Title has been changed.";
    },
    handleLogin() {
      this.$refs.formRef.validateEmail();
      this.$refs.formRef.validatePassword();
      const data = this.$refs.formRef.email;
      console.log(data);
    },
  },

  components: {
    RefForm,
  },
};
</script>

<style></style>
