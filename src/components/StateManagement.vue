<template>
  <h1>State Management</h1>
  <h3>
    Vue components là các khối xây dựng của ứng dụng Vue bằng cách cho phép
    chúng ta couple markup (HTML), logic (JS) và styles (CSS) trong chúng.
    <br />
    Mỗi Vue component chứa một hàm data() để reactive. Nếu một giá trị data()
    property sử dụng trong template thay đổi, component view sẽ re-render để
    hiển thị thay đổi.
    <br />
    Props và custom events có thể chia sẻ dữ liệu giữa các components cha và
    con.
    <br />
    Sử dụng props để truyền dữ liệu từ cha xuống cho con, chỉ có thể được sử
    dụng để truyền dữ liệu theo định dạng đơn hướng (từ cha xuống con đến cháu).
    <br />
    Để tạo điều kiện cho component con thông báo cho cha về điều gì đó, chúng ta
    có thể sử dụng Vue custom events.
    <br />
    Trong hai components biệt lập, một component không được rendered bên trong
    component khác. Có khoảng 3 cách chính để chúng ta có thể bắt đầu quản lý
    thông tin giữa các sibling components và kết quả là bắt đầu xử lý quản lý
    state trong toàn ứng dụng: EventBus, library flux-like VueX,...
  </h3>
  <h2>EventBus</h2>
  <h3>
    EventBus là một Vue instance được sử dụng để cho phép các components biệt
    lập subscribe và publish custom events với nhau.
  </h3>
  <br />
  <div>
    <StateManagementChild
      :numbers="numbers"
      @number-added="numbers.push($event)"
    />
  </div>
  <br />
  <br />
  <!-- <div>
    <NumberSubmit></NumberSubmit>
  </div>
  <br />
  <div>
    <NumberDisplay></NumberDisplay>
  </div> -->
</template>

<script>
import StateManagementChild from "./StateManagementChild.vue";
// import NumberSubmit from "./NumberSubmit.vue";
// import NumberDisplay from "./NumberDisplay.vue";
export default {
  name: "ParentComponent",
  data() {
    return {
      numbers: [1, 2, 3],
    };
  },
  components: {
    StateManagementChild,
    // NumberSubmit,
    // NumberDisplay,
  },
};
</script>

<style></style>
