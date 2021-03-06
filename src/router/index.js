import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../views/Navbar.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Navbar,
        children: [
            {
                path: '',
                component: () => import('@/components/Home.vue'),
                meta: { title: 'Home'},
            },
            {
                path: 'Home',
                component: () => import('@/components/Home.vue'),
                meta: { title: 'Home'},
            },       
            {
                path: 'Play',
                name: 'Play',
                component: () => import('@/components/Play.vue'),
                meta: { title: 'Play'},
                props: true,
            },       
            {
                path: 'HowtoPlay',
                component: () => import('@/components/HowtoPlay.vue'),
                meta: { title: 'HowtoPlay'},
            },       
        ]
    }
]

const router = new VueRouter({
    routes
})
  
  export default router