/* eslint-disable no-new,no-undef */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from 'routes'
import VueApollo from 'vue-apollo'
Vue.use(VueApollo);
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    localStorage.getItem('Login_Page') ? next() : next('/main')
  } else {
    next()
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
