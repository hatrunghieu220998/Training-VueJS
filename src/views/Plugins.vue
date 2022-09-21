<template>
    <div>
        <p><span style="font-weight: 600; ">Thông thường thì các plugin được dùng để bổ sung tính năng cho Vue ở cấp
                toàn cục. Không có phạm vi ràng buộc cụ thể nào cho một plugin – nói chung bạn có thể viết một số kiểu
                plugin khác nhau như sau:</span>

            <br>- Thêm một số phương thức hoặc thuộc tính toàn cục

            <br> - Thêm một hoặc nhiều directive/filter/transition ...,

            <br>- Thêm component options global thông qua mixin...

            <br> - Thêm một số phương thức đối tượng (instance method) bằng cách đính kèm vào Vue.prototype.

            <br>- Một thư viện cung cấp API riêng và cùng lúc đó thêm một hoặc vài tính năng được liệt kê trên đây.
        </p>

        <div id="app">
            <img alt="Vue logo" src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/6/28/ca-voi-xuat-hien-16563885969622086811579.jpeg" width="25%" />
            <HomeViewVue msg="Hello Vue in CodeSandbox!" />
        </div>
    </div>
</template>

<script>
    import HomeViewVue from './HomeView.vue';
export default {
  name: "Plugins",
  components: {
    HomeViewVue
  }
};
</script>