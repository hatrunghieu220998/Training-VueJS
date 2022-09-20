<template>
  <main-screen
    v-if="status === 'default'"
    @onComputed="onHandleBeforeComputed()"
    @onHandlingEvents="onHandlingEvent()"
    @onRefsTemplate="onRefsTemplate()"
    @onEvents="onEvents()"
    @onAsyncComponent="onAsyncComponent()"
    @onRegistration="onRegistration"
  ></main-screen>
  <computed v-if="status === 'computed'"></computed>
  <handling-events v-if="status === 'HandlingEvents'"></handling-events>
  <refs-template v-if="status === 'RefsTemplate'"></refs-template>
  <events-screen v-if="status === 'Events'"></events-screen>
  <async-component v-if="status === 'AsyncComponent'"></async-component>
  <registration v-if="status === 'registration'">

    <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <h1 style="color: red;">This is slot content of registration width no name or name default , ahihi 🙌👌🙌🙌</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi et omnis
       rem ut vero voluptates itaque, delectus odio aperiam,
        deleniti dolores esse quasi. Veniam, corrupti. Adipisci nostrum tempora odit (●'◡'●)(●'◡'●)😒😒.</p>
        <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
  
  </template>
  </registration>
</template>
<script>
import ComputedProperty from "./components/ComputedProperty.vue";
import Main from "./components/Main.vue";
import HandlingEvents from "./components/HandlingEvents.vue";
import RefsTemplate from "./components/RefsTemplate.vue";
import Events from "./components/Events.vue";
import AsyncComponent from "./components/AsyncComponent.vue";
import Registration from "./components/Registration.vue";
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
    Registration: Registration,
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
    onRegistration() {
      this.status = "registration";
    },
  },
};
</script>
<style></style>
