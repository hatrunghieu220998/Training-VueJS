<template>
  <div class="box">
    <h1 class="title">{{msg}}</h1>
    <p>SFC: là một định dạng tệp đặc biệt cho phép chúng ta đóng gói template, logic và style của một component Vue trong một tệp duy nhất.</p>
    <p>SFC khuyến khích nên sử dụng trong các trang như:</p> 
    <p> - Single-Page Applications</p>
    <p> - Static Site Generation</p>
    <p>Mặc dù single file components yêu cầu 1 bước xây dựng nhưng lại có rất nhiều lợi ích:</p>
    <p> + Tác giả đã mô-đun hóa các components sử dụng cú pháp HTML, CSS và JavaScript quen thuộc</p>
    <p> + Các mẫu được biên dịch trước mà không cần biên dịch thời gian chạy</p>
    <p> + components scope css</p>
    <p> + Nhiều tối ưu hóa thời gian biên dịch hơn bằng cách phân tích chéo mẫu và tập lệnh</p>
    <p> + Hỗ trợ IDE với tính năng tự động hoàn thành và kiểm tra kiểu cho các biểu thức mẫu</p>
    <p> + Hỗ trợ thay thế mô-đun nóng (HMR) ngoài hộp</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Single-File Components!'
      }
    }
  }
  </script>
<style>
.title {
  text-align: center;
  color: brown;
  font-weight: bold;
}
</style>
