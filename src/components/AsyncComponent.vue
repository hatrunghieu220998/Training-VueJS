<template>
  <h1>Async Component</h1>
  <button @click="show = !show">Show</button>
  <div v-if="show">
    <async-comp-child></async-comp-child>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import LoadingComponent from "./LoadingComponent.vue";
import ErrorComponent from "./ErrorComponent.vue";
// const AsyncCompChild = () => ({
//   components: import("./AsyncCompChild"),
//   loading: LoadingComponent,
//   error: ErrorComponent,
//   delay: 500,
//   timeout: 3000,
// });
const AsyncCompChild = defineAsyncComponent({
  // the loader function
  loader: () => import("./AsyncCompChild.vue"),

  // A component to use while the async component is loading
  loadingComponent: LoadingComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 500,

  // A component to use if the load fails
  errorComponent: ErrorComponent,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
});
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    AsyncCompChild,
  },
};
</script>

<style></style>
