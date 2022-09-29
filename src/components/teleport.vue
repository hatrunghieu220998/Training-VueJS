<template>
    <div>
    <h1>teleport</h1>
    <p>teleport: là một thành phần được tích hợp sẵn cho phép chúng ta "dịch chuyển" một phần của khuôn mẫu của một thành phần vào một nút DOM tồn tại bên ngoài hệ thống phân cấp DOM của thành phần đó.</p>
    <MyModal />
  </div>
</template>

<script>
import MyModal from './MyModal.vue'
export default {
  components: {
      MyModal,
  },
};
</script>

<style scoped>
  h1 {
  color: blue;
}
</style>
