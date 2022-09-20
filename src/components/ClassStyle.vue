1. class binding: 
// kiểu object

<!-- <template>
  <div class="text-title" :class="{ active: isActive }">
    - là một directive thể hiện sự ràng buộc giữa các thuộc tính của thẻ HTML như class và dữ liệu data trong Vue. <br />
    - class binding có 2 cách viết : <br />
      + v-bind:class="" <br />
      + :class="" <br />
    - class binding cũng có 2 kiểu sử dụng cú pháp thường dùng: <br />
      + kiểu object: {} <br />
      + kiểu array: [] <br />
  </div>
  <br />
  <button @click="isActive = !isActive">Active text</button>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style> -->

// kiểu array 

<!-- <template>
  <div class="binding-html">
    <div class="text-title" :class="[activeClass, boldClass]">
      - là một directive thể hiện sự ràng buộc giữa các thuộc tính của thẻ HTML như class và dữ liệu data trong Vue. <br />
    - class binding có 2 cách viết : <br />
      + v-bind:class="" <br />
      + :class="" <br />
    - class binding cũng có 2 kiểu sử dụng cú pháp thường dùng: <br />
      + kiểu object: {} <br />
      + kiểu array: [] <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "active",
      boldClass: "bold",
    };
  },
};
</script>

<style scoped>
.active {
  color: red;
} -->

2. style binding:
// kiểu object

<!-- <template>
  <div
    class="text-title"
    :style="{
      color: colorValue,
      border: borderValue,
      padding: paddingValue,
    }"
  >
    - là một directive thể hiện sự ràng buộc giữa các thuộc tính của thẻ HTML như style và dữ liệu data trong Vue, <br />
Được hiểu 1 cách đó là chèn trực tiếp vào trong thẻ HTML. <br />
- style binding có 2 cách viết: <br />
  + v-bin:style="" <br />
  + :style="" <br />
- style binding cũng có 3 kiểu sử dụng cú pháp thường dùng: <br />
   + kiểu object: {} <br />
   + kiểu array: [] <br />
   + kiểu auto prefix
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorValue: "red",
      borderValue: "1px solid magenta",
      paddingValue: "10px",
    };
  },
};
</script> -->

// kiểu array

<!-- <template>
  <div class="text-title" :style="[colorValue, borderValue, paddingValue]">
    - là một directive thể hiện sự ràng buộc giữa các thuộc tính của thẻ HTML như style và dữ liệu data trong Vue,
Được hiểu 1 cách đó là chèn trực tiếp vào trong thẻ HTML. <br />
- style binding có 2 cách viết: <br />
  + v-bin:style="" <br />
  + :style="" <br />
- style binding cũng có 3 kiểu sử dụng cú pháp thường dùng: <br />
   + kiểu object: {} <br />
   + kiểu array: [] <br />
   + kiểu auto prefix
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorValue: {
        color: "magenta",
      },
      borderValue: {
        "border": "1px solid green",
      },
      paddingValue: {
        padding: "10px",
      },
    };
  },
};
</script> -->

// auto prefix

<template>
  <div class="text-title" :style="{ background: 'red', color: '#fff', padding: '20px' }">
    - là một directive thể hiện sự ràng buộc giữa các thuộc tính của thẻ HTML như style và dữ liệu data trong Vue,
Được hiểu 1 cách đó là chèn trực tiếp vào trong thẻ HTML. <br />
- style binding có 2 cách viết: <br />
  + v-bin:style="" <br />
  + :style="" <br />
- style binding cũng có 3 kiểu sử dụng cú pháp thường dùng: <br />
   + kiểu object: {} <br />
   + kiểu array: [] <br />
   + kiểu auto prefix
  </div>
</template>