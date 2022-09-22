<template>
  <div id="img-not_find">
    <div class="title-error">
      <p class="error-404">404 Error</p>
      <p class="error-message">Page Not Found</p>
      <RouterLink class="handle-comebackHome" to="/">
        Comeback Home
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped>
.error-404 {
  font-size: 50px;
  font-weight: 20px;
}
.error-message {
  font-size: 50px;
  font-weight: 20px;
}
#img-not_find {
  background-image: url("https://anhdephd.vn/wp-content/uploads/2022/06/hinh-anh-dong-de-thuong.gif");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: aqua; */
  width: 100wh;
  height: 100vh;
  position: relative;
}
.title-error {
  position: absolute;
  top: 29%;
  right: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  transform: translate(50%, 50%);
}
.handle-comebackHome {
  position: absolute;
  top: 60%;
  right: 50%;
  transform: translate(50%, 50%);
  border-radius: 10px;
  border: solid 2px antiquewhite;
  background-color: transparent;
  color: antiquewhite;
  font-size: 30px;
  padding: 8px 12px;
  text-decoration: none;
  margin-top: 30px;
  width: 300px;
}
</style>