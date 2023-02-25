import './style.css'
import { APP } from './APP'
import { Bar } from './views/Bar'
import { Foo } from './views/Foo'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: Foo },
    { path: '/about', component: Bar },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const app = createApp(APP)
app.use(router)
app.mount('#app')