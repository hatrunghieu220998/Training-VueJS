<template>
   <div>
    <h1>Routing</h1>
    <p>Routing: là máy chủ gửi phản hồi dựa trên đường dẫn URL mà người dùng đang truy cập. <br />
      Khi chúng ta nhấp vào liên kết trong ứng dụng web do máy chủ hiển thị truyền thống, <br />
      trình duyệt sẽ nhận được phản hồi HTML từ máy chủ và tải lại toàn bộ trang bằng HTML mới.</p>
      <p>Tuy nhiên, trong (SPA), JavaScript phía máy khách có thể chặn điều hướng, <br />
        tìm nạp động dữ liệu mới và cập nhật trang hiện tại mà không cần tải lại toàn bộ trang. <br />
        Điều này thường dẫn đến trải nghiệm người dùng linh hoạt hơn, đặc biệt là đối với các trường hợp sử dụng giống applications thực tế hơn, <br />
        trong đó người dùng được mong đợi thực hiện nhiều tương tác trong một khoảng thời gian dài.<br />
      </p>
    <div>
      <a href="#/">CurrentA</a> |
      <a href="#/CurrentB">CurrentB</a> |
      <a href="#/non-existent-path">Page-Not-Found</a>
      <component :is="currentView" />
    </div>
  </div>
</template>
<script>
  import CurrentA from './CurrentA.vue'
  import CurrentB from './CurrentB.vue'
  import NotFound from './NotFound.vue'
  const routes = {
  '/': CurrentA,
  '/CurrentB': CurrentB
  }
export default {
  components: {
      CurrentA,
      CurrentB,
    },
  data() {
    return {
      current: 'CurrentA',
      currentPath: window.location.hash
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
    this.currentPath = window.location.hash
    })
  },
  computed: {
    currentView() {
    return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
}
</script>
<style scoped>
  h1 {
  color: blue;
}
</style>