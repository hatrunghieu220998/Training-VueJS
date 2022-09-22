<template>
  <h1>TransitionGroup là 1 component tích hợp đc design để tạo hiệu ứng cho việc chèn và loại bỏ và thay đổi thứ tự của các element hoặc component được hiển thị trong danh sách</h1>
  <p>TransitionGroup nó cũng có 1 số điểm khác biệt với Transition:</p>
  <p> + TransitionGroup nó hỗi trợ props, css transition và javaScript hook cũng giống như Transition</p>
  <p> + Theo mặc định, nó không hiển thị phần tử trình bao bọc. Nhưng có thể chỉ định một phần tử sẽ được hiển thị với phần tử tag prop</p>
  <p> + Transition mode không khả dụng, vì không còn xen kẽ giữa các yếu tố loại trừ lẫn nhau.</p>
  <p> + Các phần tử bên trong luôn được yêu cầu có một thuộc tính duy nhất key</p>
  <p> + CSS transition classes sẽ được áp dụng cho các phần tử riêng lẻ trong danh sách, không áp dụng cho nhóm / vùng chứa chính nó.</p>

<br />
<br />
<h2>Enter/Leave/Move Transitions</h2>
<div class="content">
  <button @click="enter">Enter</button>
  <button @click="reset">Reset</button>
  <button @click="shuffle">shuffle</button>
  <TransitionGroup tag="ul" name="list" class="container">
    <div v-for="item in items" class="item" :key="item">
      {{ item }}
      <button @click="remove(item)">Remove</button>
    </div>
  </TransitionGroup>
</div>
<br />
<div class="content">
  <h2>Staggering List Transitions</h2>
  <p>Bằng cách giao tiếp với các chuyển đổi JavaScript thông qua các thuộc tính dữ liệu,
    chúng ta cũng có thể làm xáo trộn các chuyển đổi trong một danh sách. 
    Đầu tiên, chúng ta hiển thị một mục dưới dạng thuộc tính dữ liệu trên phần tử DOM</p>
<StaggeringList />
</div>

</template>
<script>
import { shuffle } from 'lodash-es'
import StaggeringList from "./StaggeringList.vue";

const getInitialItems = () => [1, 2, 3, 4, 5]
let id = getInitialItems().length + 1

export default {
  data() {
    return {
      items: getInitialItems()
    }
  },
  components: {
    StaggeringList: StaggeringList,
  },
  methods: {
    enter() {
      const i = Math.round(Math.random() * this.items.length)
      this.items.splice(i, 0, id++)
    },
    reset() {
      this.items = getInitialItems()
    },
    shuffle() {
      this.items = shuffle(this.items)
    },
    remove(item) {
      const i = this.items.indexOf(item)
      if (i > -1) {
        this.items.splice(i, 1)
      }
    }
  }
}
</script>
<style>
p {
  font-size: 18px;
}
.content {
  margin: 0 50px;
  max-width: 500px;
}

.container {
  position: relative;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

</style>