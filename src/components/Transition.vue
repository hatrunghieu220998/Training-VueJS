<template>
  <div class="container">
    <h2>Transition</h2>
    <p>
      VueJS cung cấp cho ta một cặp thẻ Transition để quy định các transitions
      và animations cho các element khi nó xuất hiện và khi bị remove.
      <br />
      Một cặp thẻ transition chỉ hoạt động với 1 element.
      <br />
      Một transition có 2 giai đoạn là add và remove element.
      <br />
      enter, enter-active, leave, leave-active.
      <br />
      Transition dung được cho cả v-if và v-show.
      <br />
      Attribute appear. Mặc định khi không truền giá trị thì là active. Sẽ nhận
      ngay hiệu ứng từ đầu.
      <br />
      Sử dụng nhiều class (từ library) bằng cách thêm các Attributes:
      enter-class, enter-active-class, leave-class, leave-active-class rồi
      truyền tên class vào.
      <br />
      Có thể bind dữ liệu vào name, class và các Attributes khác.
    </p>
    <hr />
    <select v-model="typeAnimation" class="form-control">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
      <option value="animate__animated animate__lightSpeedInLeft">
        lightSpeedInLeft
      </option>
    </select>
    <button class="btn btn-block btn-success" @click="show = !show">
      Show notifications
    </button>
    <br />
    <br />
    <transition :name="typeAnimation">
      <div class="alert alert-success" v-if="show">
        This is something about notifications.
      </div>
    </transition>
    <transition name="slide">
      <div class="alert alert-warning" v-if="show">
        This is something about notifications.
      </div>
    </transition>
    <transition
      enter-class=""
      enter-active-class="animate__animated animate__tada"
      leave-class=""
      leave-active-class="animate__animated animate__zoomOutDown"
      appear=""
    >
      <div class="alert alert-danger" v-if="show">
        This is something about notifications.
      </div>
    </transition>
    <transition
      enter-class=""
      :enter-active-class="typeAnimation"
      leave-class=""
      leave-active-class="animate__animated animate__zoomOutDown"
      appear=""
    >
      <div class="alert alert-danger" v-if="show">
        This is something about notifications.
      </div>
    </transition>
    <hr />
    <h3>Transition giữa các element</h3>
    <p>Sử dụng v-if, v-else để chuyển đổi transition thông qua Key</p>
    <br />
    <transition :name="typeAnimation" mode="out-in">
      <div class="alert alert-success" v-if="show" key="success">
        This is something about notifications SUCCESS.
      </div>
      <div class="alert alert-danger" v-else key="danger">
        This is something about notifications DANGER.
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      typeAnimation: "fade",
    };
  },
};
</script>

<style scope>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-control {
  width: 350px;
  height: 50px;
  border-radius: 3px;
  margin-bottom: 20px;
  padding-left: 5px;
  padding-right: 5px;
}
.btn {
  padding: 20px;
}

.alert {
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 10px #333;
}

.alert-success {
  background-color: green;
}

.alert-warning {
  background-color: rgb(219, 219, 60);
}

.alert-danger {
  background-color: red;
}

/* enter */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transition: all ease 1s;
}

/* leave */
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/* slide transition effect */
/* enter */
.slide-enter {
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

/* leave */
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}

/* key frames */
@keyframes slide-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
