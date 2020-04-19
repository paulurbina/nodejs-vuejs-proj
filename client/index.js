import Vue from 'vue'
import store from './store'
import './styles/main.css'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import Main from './pages/Main.vue'

import * as Validator from 'vee-validate';
import TextInput from '@components/TextInput.vue'

Vue.use(Router)
Vue.use(Validator, {
    inject: true
});


Vue.component('text-input', TextInput)

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Main)
})
