<template>
  <div style="margin-top: 30px; margin-bottom: 30px">
    <label>Email</label>
    <input type="text" name="email" v-model="email" />
    <label>Password</label>
    <input type="passowrd" name="password" v-model="password" />
    <label>Re-enter password</label>
    <input type="passowrd" name="password" v-model="rePassword" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "hatrunghieu2209198@gmail.com",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    validateEmail() {
      // Logic for validate email
      alert("Email validation");
    },
    validatePassword() {
      // Logic for validate password
    },
  },
};
</script>

<style></style>
