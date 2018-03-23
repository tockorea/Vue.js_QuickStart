import Vue from 'vue'
import store from './store'
import Todolist from './components/Todolist.vue'

new Vue({
  store,
  el: '#app',
  render: h => h(Todolist)
})