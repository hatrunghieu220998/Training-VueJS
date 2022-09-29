<template>
  <div class="container">
    <BaseSlot>
      <template #header>
        <h2>Slot Content</h2>
      </template>
      <template #default>
        <p>Được sử dụng để phân bố nội dung trong component. Slots có thể bao gồm bất kỳ template code nào, thậm chí là cả component khác.<br />
        Nếu không đặt slot trong component cần truyền nội dung thì bất kỳ nội dung nào được truyền vào cũng đều bị bỏ qua.</p>
      </template>
    </BaseSlot>
    <BaseSlot>
      <template #header>
        <h2>Fallback Content</h2>
      </template>
      <template #default>
        <p>Có những trường hợp cần thiết phải quy định fallback content mặc định cho slot, nó sẽ được render khi slot được truyền vào không có nội dung được cung cấp.</p>
      </template>
    </BaseSlot>
    <BaseSlot>
      <template #header>
        <h2>Named Slots</h2>
      </template>
      <template #default>
        <p>Khi cần sử dụng nhiều slot trong component, với mỗi slot có 1 nội dung khác nhau thì cần truyền name attribute vào trong slot đó:</p>
        <h4>Chú ý: v-slot chỉ sử dụng được với thẻ template.</h4>
      </template>
    </BaseSlot>
  </div>
</template>
<script>
  import BaseSlot from './BaseSlot.vue'
  export default {
  components: {
    BaseSlot
  }
}
</script>
