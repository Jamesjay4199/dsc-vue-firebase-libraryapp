import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './routes';
import { firestorePlugin } from "vuefire";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(firestorePlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
