<template>
  <main-screen
    v-if="status === 'default'"
    @onComputed="onHandleBeforeComputed()"
    @onHandlingEvents="onHandlingEvent()"
    @onRefsTemplate="onRefsTemplate()"
    @onEvents="onEvents()"
    @onSFC="onSFC()"
  ></main-screen>
  <component :is="status"></component>
</template>
<script>
import ComputedProperty from "./components/ComputedProperty.vue";
import Main from "./components/Main.vue";
import HandlingEvents from "./components/HandlingEvents.vue";
import RefsTemplate from "./components/RefsTemplate.vue";
import Events from "./components/Events.vue";
import SFC from "./components/SFC.vue";
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
    SFC: SFC,
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
    onSFC() {
      this.status = "SFC";
    },
  },
};
</script>
<style></style>
