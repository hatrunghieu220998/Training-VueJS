import App from 'Vue'
App.directive("font-size", {
  beforeMount: (el, binding) => {
    el.style.fontSize = 20 + "px";
  },
  updated: (el, binding) => {
    el.style.fontSize = 20 + "px";
  },
});