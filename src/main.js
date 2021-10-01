import Vue from 'vue'
import App from './App.vue'
import Scheduler from './Scheduler.vue'
import VueCalendly from 'vue-calendly';

Vue.use(VueCalendly);


const NotFound = { template: '<p>Page not found.. sorry</p>' }

const routes = {
  '/': App,
  '/scheduler': Scheduler,
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})