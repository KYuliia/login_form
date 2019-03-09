/* eslint-disable no-new,no-undef */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from 'routes'
import {HttpLink} from 'apollo-link-http'
import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

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
Vue.config.productionTip = false;

Vue.use(require('vue-moment'));

const httpLink = new HttpLink({uri: 'http://localhost:8080/'});

const httpLinkAuth = setContext((_, {headers}) => {
  const token = localStorage.getItem('Login_Page');

  const apolloClient = new ApolloClient({
    link: httpLinkAuth.concat(httpLink),
    cache: new InMemoryCache()
  });
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
});


Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  render: h => h(App)
});
