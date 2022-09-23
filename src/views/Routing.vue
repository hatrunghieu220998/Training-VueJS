<template>
    <div>
        <h2> + 1 số khái niệm cơ bản </h2>
        <div class="des">
            <p>- serve sẽ gửi phản hồi dựa trên đường dẫn URL mà người dùng đang truy cập </p>
            <p> - với các làm truyền thống ( vd thẻ a ) sẽ tải lại toàn bộ trang </p>
            <p>- với Single-Page Application (SPA) sẽ chặn điều hướng, tự động tìm và mạp lại dữ liệu cần thiết mà không
                làm tải lại toàn bộ trang, làm tăng trải nghiệm người dùng tốt hơn, mượt mà hơn </p>
        </div>
        <router-link to="/examplerouter" class="title"> next to page router </router-link>
        <h2>- thư viện chính thức vue-router</h2>
        <div class="des">
            <p>- cài đặt vue-router : npm i vue-router</p>
            <p> - sử dụng các cặp thẻ RouterVue ở nơi cần thiển thị component Router và RoutreLink đường dẫn khi click vào</p>
            <p>- trường hợp không muốn sử dụng routerLink thì ta có thể dử dụng Vue.router hoặc this.$router.push("/link...") để chuyển link router</p>
            <p>- Dinamic router với router động ( truyền params vào router) path:'/path/:id'</p>
            <p>- router không được định nghĩa path: '/:pathMatch(.*)*', name: 'NotFoundPage' sẽ chọt tớt component
                NotFoundPage</p>
            <p> - history: createWebHistory() mô phỏng URL ở dạng hash (#), không gửi link lên server, không load lại
                trang, không tốt cho SEO </p>
            <p>- history: createWebHashHistory() dạng thông thường ta hay thấy </p>
        </div>
        <router-link to="/dynamicrouter" class="title"> next to page router </router-link>

    </div>
</template>
<script>
export default {
    name: 'Routing',
    data() {
        return {

        }
    },

}
</script>
<style>
.title {
    margin-left: 60px
}

.des {
    margin-left: 100px
}
</style>