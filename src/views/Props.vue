<template>

  <div>
    <div>
      <p>- là cách truyền dữ liệu từ component cha chuyền xuống component con </p>
      <p>- ở component con, ta cần có phương thức component:{...{name: props, type: type props }}, ngoài ra còn có
        default component </p>
      <p>- component con nhận được dữ liệu thì không thay đổi được, muốn thay đổi chỉ có thể thay đổi ở component cha
      </p>
      <p> - từ component con truyền lên component cha thì ta dùng $emit('nameFunction'. data). và ở component cha cũng
        không thay đổi được dữ liệu. </p>
      <p> - chỉ truyền đc props ở component kế cận . truyền nhiều cấp cần có component trung gian</p>
      <p> - component cha truyền xuống là 1 obj thì ở component con có thể obj.name, obj.src ...</p>
      <p>- với những dữ liệu không mang tính toàn cục, chỉ trong vài component thì dùng props sẽ tiện hơn vuex</p>

      <button type="button" @click="handleShow">Show propChild</button>

        <PropsChild v-if="isShow" @handleClick="handleClick" :items="items" />

    </div>
  </div>
</template>
<script>
import PropsChild from './propsChild.vue';
export default {
    name: "Props",
    components: { PropsChild },
    data(){
      return{
        items:['tuan', 'Sang', 'Hieu', "hiep"],
        isShow: false
      }
    },
    methods:{
      handleShow(){
        this.isShow = !this.isShow
      },
      handleClick(index){
        this.items.splice(index, 1)
      }
    }
};
</script>
<style>

</style>
