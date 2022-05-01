import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'flowbite'

const NotFound = { template: '<p>Page not found.. <a href="/">Go back</a></p>' }

const routes = {
  '/': App,
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