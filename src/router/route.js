
import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/Login.vue'
import Reg from '../components/Reg.vue'
import Todo from '../components/Todo.vue'


const routes = [
    {
        path:'/home',
        component:Login
    },
    {
        path:'/registration',
        component:Reg,
    },

    {
        path:'/todo',
        component:Todo
    }
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router