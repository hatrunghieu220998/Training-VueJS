<template>
    <div>
        <h2> + 1 số khái niệm cơ bản </h2>
        <p class="title">- serve sẽ gửi phản hồi dựa trên đường dẫn URL mà người dùng đang truy cập  </p>
        <p class="des"> - với các làm truyền thống ( vd thẻ a ) sẽ tải lại toàn bộ trang </p>
        <p class="des">- với Single-Page Application (SPA) sẽ chặn điều hướng, tự động tìm và mạp lại dữ liệu cần thiết mà không làm tải lại toàn bộ trang, làm tăng trải nghiệm người dùng tốt hơn, mượt mà hơn </p>
        <router-link to="/examplerouter" class="title"> next to page router </router-link>
        <h2 >- thư viện chính thức vue-router</h2>
        <p class="des">- cài đặt vue-router : npm i vue-router</p>
        <p class="des">- Dinamic router với router động path:'/path/:id'</p>
        <p class="des">- router không được định nghĩa    path: '/:pathMatch(.*)*', name: 'NotFoundPage' sẽ chọt tớt component NotFoundPage</p>
        <router-link to="/dynamicrouter" class="title"> next to page router </router-link>

    </div>
</template>
<script>
export default {
    name:'Routing',
    data(){
        return{

        }
    },

}
</script>
<style>
    .title{
        margin-left: 60px
    }
    .des{
        margin-left: 100px
    }
</style>