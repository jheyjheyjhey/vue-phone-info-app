import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const errorPage = { template: '<p>Page not found</p>' }

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return Routes[this.currentRoute] || errorPage
    }
  },
  render(h) { return h(this.ViewComponent) }
})
