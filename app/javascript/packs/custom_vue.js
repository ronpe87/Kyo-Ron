import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: '#app',
    data: {
      message: 'World'
    },
    methods: {
      update() {
        this.message = 'Vue.js'
      }
    }
  })
})
