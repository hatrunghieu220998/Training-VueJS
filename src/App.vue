<template>
  <main-screen
    v-if="status === 'default'"
    @onComputed="onHandleBeforeComputed()"
    @onHandlingEvents="onHandlingEvent()"
    @onRefsTemplate="onRefsTemplate()"
    @onEvents="onEvents()"
    @onAsyncComponent="onAsyncComponent()"
  ></main-screen>
  <computed v-if="status === 'computed'"></computed>
  <handling-events v-if="status === 'HandlingEvents'"></handling-events>
  <refs-template v-if="status === 'RefsTemplate'"></refs-template>
  <events-screen v-if="status === 'Events'"></events-screen>
  <async-component v-if="status === 'AsyncComponent'"></async-component>
</template>
<script>
import ComputedProperty from "./components/ComputedProperty.vue";
import Main from "./components/Main.vue";
import HandlingEvents from "./components/HandlingEvents.vue";
import RefsTemplate from "./components/RefsTemplate.vue";
import Events from "./components/Events.vue";
import AsyncComponent from "./components/AsyncComponent.vue";
export default {
  data() {
    return {
      status: "default",
    };
  },
  name: "App",
  components: {
    Computed: ComputedProperty,
    MainScreen: Main,
    HandlingEvents: HandlingEvents,
    RefsTemplate: RefsTemplate,
    EventsScreen: Events,
    AsyncComponent: AsyncComponent,
  },
  methods: {
    onHandleBeforeComputed() {
      this.status = "computed";
    },
    onHandlingEvent() {
      this.status = "HandlingEvents";
    },
    onRefsTemplate() {
      this.status = "RefsTemplate";
    },
    onEvents() {
      this.status = "Events";
    },
    onAsyncComponent() {
      this.status = "AsyncComponent";
    },
  },
};
</script>
<style></style>
