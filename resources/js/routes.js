import Vue from 'vue'
import Router from 'vue-router'

Vue.use (Router);


export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component:() => import('./views/Home.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component:() => import('./views/Blog.vue')
            
        },
        {
            //variable que trae la ruta
            path: '/:slug',
            name: 'post',
            component:() => import('./views/Post.vue'),
            
            props:true

        },
        {
            path: '*',
            component: require('./views/404')
        },

        {
            //variable que trae la ruta
            path: '/servicios',
            name: 'servicios',
            component:() => import('./views/Fotos.vue'),
            
        },

        /*{
            //variable que trae la ruta
            path: '/fotos/:id',
            name: 'fotos',
            component:() => import('./views/Fotos.vue'),
            

        },*/
    ],

    mode: 'history' //elimina el #(hash) de la url



})