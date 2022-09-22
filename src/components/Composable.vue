<template>
  <div>
    <p>composable: là một hàm sử dụng API thành phần của Vue để đóng gói và sử dụng lại logic trạng thái.<br />
      Composables hoạt động như một chức năng bên ngoài trích xuất trạng thái phản ứng và chức năng được sử dụng trên một số thành phần khác.<br />
      Composables có thể được gọi cách khác là hàm tổng hợp.
    </p>
    <div>
      <p>Mouse tracker</p>
      Mouse tracker position is at: {{ x }}, {{ y }}
    </div>
    <br />
    <p>Async State</p>
    <div>
      Load post id:
      <button v-for="i in 5" @click="id = i">{{ i }}</button>

	    <div v-if="error">
        <p>Oops! Error encountered: {{ error.message }}</p>
        <button @click="retry">Retry</button>
      </div>
      <div v-else-if="data">Data loaded: <pre>{{ data }}</pre></div>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>
<script setup>
  import { ref, computed } from 'vue'
  import { useMouse } from '../composable/mouse.js'
  import { useFetch } from '../composable/fetch.js'
  const { x, y } = useMouse()
  const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
  const id = ref('1')
  const url = computed(() => baseUrl + id.value)
  const { data, error, retry } = useFetch(url)
</script>
<style>

</style>
