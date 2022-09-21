<template>
    <div>
        <h3>Chức năng</h3>
        <p> - Được hiểu như sự dịch chuyển của 1 component tới 1 vị trí cố định mà ta mong </p>
        <p>vd: có 1 component modal và được gọi ở 1 vị trí trong 1 component khác có position => ta phải cấu hình lại
            modal cho hợp lý</p>
        <p> => để tránh việc cấu hình lại nhiều ta sử dụng teleport </p>
        <h3>+ CÚ PHÁP</h3>
        <span>
            <Teleport to="body">
                //code here modal
            </Teleport>
            <Teleport to="#modals">
                //code here modal
            </Teleport>
        </span>
        <p> - cú pháp to="body" sẽ chỉ dòng code bên trong teleport tới nơi muốn chứa, vd to="body" tới thẻ body.
            to="#add" tới thẻ có id="app" </p>
        <p>- muốn tắt tính năng teleport đi ta để :disabled="isDisabled" vào trong thẻ teleport</p>
        <p>- ngoài ra có thể chuyển dịch nhiều thẻ teleport tới cùng 1 thẻ chứa mong muốn</p>
        <p>
            <!-- <Teleport to="#modals">
                <div>A</div>
            </Teleport>
            <Teleport to="#modals">
                <div>B</div>
            </Teleport>

            <br>
            kết quả

            <div id="modals">
                <div>A</div>
                <div>B</div>
            </div> -->
        </p>
        <div class="container">
            <div class="child1">teleport</div>
            <div class="child2">
                <Modal />
            </div>
        </div>
    </div>


</template>
<script>
import Modal from "@/Teleport/modal.vue";
export default {
    name: 'Teleport',
    components: { Modal }
}
</script>
<style>
.container {
    display: flex;
}

.child1 {
    width: 50%;
}
</style>