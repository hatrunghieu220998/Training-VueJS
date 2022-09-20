<template>
  <h3>Registration</h3>
  <!-- Trường hợp có nhiều slot và muốn truyền mỗi slot với một nội dung khác nhau, thì cần truyền name attribute vào slot -->
  <!-- Lúc này bất kỳ element nào không được wrap bởi <template> đều nằm trong slot mặc định hoặc có thể wrap trong <template> với v-slot:default -->
  <header>
    <slot name="header"></slot>
  </header>
  <slot>
    <main>
      <h2>This is fallback content slot if hasnot content passed 🤦‍♀️🤦‍♂️🤦‍♀️🤷‍♀️🤷‍♀️</h2>
      <h2>This is fallback content slot if hasnot content passed 🤦‍♀️🤦‍♂️🤦‍♀️🤷‍♀️🤷‍♀️</h2>
      <h2>This is fallback content slot if hasnot content passed 🤦‍♀️🤦‍♂️🤦‍♀️🤷‍♀️🤷‍♀️</h2>
      <h2>This is fallback content slot if hasnot content passed 🤦‍♀️🤦‍♂️🤦‍♀️🤷‍♀️🤷‍♀️</h2>
    </main>
      
  </slot>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
