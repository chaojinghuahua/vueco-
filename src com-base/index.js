// 这里面需要写实例化vue的代码
import Vue from "vue";
import App from "./App";
Vue.config.productionTip = false;

new Vue({
  el: "#root",
  render: (h) => h(App),
});
