import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },

]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router