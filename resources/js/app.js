/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('post-component', require('./components/Post.vue').default);
Vue.component('InfiniteLoading', require('vue-infinite-loading').default);
Vue.component('app-component', require('./components/AppComponent.vue').default);
//Vue.component('blog-component', require('./views/Blog.vue').default);
//Vue.component('home-component', require('./views/Home.vue').default);
//Vue.component('error-component', require('./views/404.vue').default);

//confijuracion de las rutas


import router from './routes';



const app = new Vue({
    el: '#app',
    router
    
});

console.log("holaaaaaaaaaaaaa22")