import Vue from 'vue'
import './styles/main.css'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import Main from './pages/Main.vue'

// import  VeeValidate  from "vee-validate";
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
    render: h => h(Main)
})
