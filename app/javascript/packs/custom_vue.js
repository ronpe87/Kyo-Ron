import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app2',
    data: {
      current: 1,
      list: [{
        id: 1,
        label: 'menu1',
        content: 'content1'
      }, {
        id: 2,
        label: 'menu2',
        content: 'content2'
      }, {
        id: 3,
        label: 'menu3',
        content: 'content3'
      }]
    },
    methods: {
      active: function (id) {
        return this.current == id
      },
      changeTab: function (id) {
        this.current = id
      }
    }
  })
})
