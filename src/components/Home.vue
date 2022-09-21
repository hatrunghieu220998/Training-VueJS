<template>
  <div class="tab">
    <p>như trong component :is="curebtTab" giá trị được truyền đến :is có thể là chuỗi tên của một component đã đăng ký hoặc đối tượng của component được nhập thực tế.</p>
    <p>Dynamic component: Khi chuyển đổi giữa nhiều component với component: is = "currentTab", một component sẽ bị ngắt kết nối khi nó bị chuyển khỏi. Chúng ta có thể buộc các component không hoạt động vẫn "sống" bằng component "KeepAlive" được tích hợp sẵn.</p>
  </div>
</template>