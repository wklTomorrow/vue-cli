import Vue from 'vue';
import Router from 'vue-router';


const home = () => import('@/home.vue')
const mine = () => import('@/mine/index')
const car = () => import('@/myBuyCar/index')
const connect = () => import('@/connect/index')
const main = () => import('@/main/index')


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/mine',
                    name: 'mine',
                    component: mine,
                    children: []
                },
                {
                    path: '/car',
                    name: 'car',
                    component: car,
                    children: []
                },
                {
                    path: '/connect',
                    name: 'connect',
                    component: connect,
                    children: []
                },
                {
                    path: '/main',
                    name: 'main',
                    component: main,
                    children: []
                },
            ]
        }
    ]
})

export default router
