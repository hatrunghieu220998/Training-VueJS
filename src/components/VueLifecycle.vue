<template>
  <div>
    <h1>vue lifecycle Hook</h1>
    <p>vue lifecycle: Mỗi 1 component đều phải đi qua 1 loạt các bước kể từ lúc nó đơi khởi tạo cho đến lúc kết thúc, <br/>
      tương ứng với đó nó chạy các function được gọi là vòng đời hooks, cho phép developer thêm các đoạn code xử lý ở từng giai đoạn cụ thể.</p>
    <h2>1. beforeCreate:</h2>
    <p>Gọi ngay khi instance được khởi tạo, trước tất cả các options khác như data() hoặc computed().</p>
    <h2>2. created:</h2>
    <p>Gọi ngay sau khi các phần sau đã được setup: reactive data, computed, properties, methods và watchers. Tuy nhiên ở bước này, component vẫn chưa được mount.</p>
    <h2>3. beforeMount:</h2>
    <p>Khi được gọi, component lúc này đã setup xong những thứ liên quan đến reactive state, nhưng chưa mount nên node DOM vẫn chưa được tạo. Chuẩn bị render lần đầu tiên</p>
    <h2>4. mounted:</h2>
    <p>Một component được coi là mounted khi:<br/>
      + Tất cả các component đồng bộ của nó đã được render(mounted), không bao gồm các component bất đồng bộ hoặc component nằm trong(Suspense)<br />
      + DOM của nó đã được tạo và chèn vào container.<br />
      Ở bước này thường dùng để thực thi các side effect cần thiết để hiển thị ra giao diện ngay lần đầu như gọi api
    </p>
    <h2>5. beforeUpdate:</h2>
    <p>Được gọi trước khi state hoặc props thay đổi, dùng để truy cập đến trạng thái của DOM tại thời điểm trước khi update DOM. </p>
    <h2>6. updated:</h2>
    <p>Được gọi sau khi có sự thay đổi của state hoặc props:<br />
      + Hook updated của component cha chỉ được gọi sau khi hook updated ở các component con của nó được gọi.
    </p>
    <h2>7. beforeUnmount:</h2>
    <p>Gọi trước khi component instance bị unmouned tức là bị xoá khỏi DOM hiện tại.</p>
    <h2>8. unmounted:</h2>
    <p>Được gọi sau khi component bị unmounted. Một component được hiểu là unmount khi:<br />
      + Tất cả các component con của nó đều bị unmount<br />
      + Tất cả các reactive effect gắn với nó (render effect, computed, watchers đều đã dừng lại). Hook này thường được sử dụng để xoá các side effect được tạo như timers, DOM event listeners hoặc ngắt kết nối với server.
    </p>
    <button @click="showError = !showError">click</button>
    <Error v-if="showError" />
  </div>
</template>

<script>
  import Error from './NotFound.vue'

  export default {
    components: {
      Error,
    },
    data() {
      return {
        showError: true,
      }
    },
    beforeCreate() {
      console.log('beforeCreate component');
    },
    created() {
      console.log('created component');
    },
    beforeMount() {
      console.log('beforeMount component');
    },
    mounted() {
      console.log('Mounted component');
    },
    beforeUpdate() {
      console.log('beforeUpdate component')
    },
    updated() {
      console.log('updated component')
    },
    beforeUnmount() {
      console.log('beforeUnmount component');
    },
    unmounted() {
      console.log('unounted component');
    },
  }
</script>

<style scoped>

h1 {
  color: blue;
}
</style>
