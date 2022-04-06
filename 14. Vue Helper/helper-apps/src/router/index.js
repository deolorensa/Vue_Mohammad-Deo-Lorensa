import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoView from '../views/TodoView.vue'
import DescView from '../views/DescView.vue'


Vue.use(VueRouter)

const routes = [
            {
                path: "/",
                name: "Home",
                component: TodoView,
            },
            {
                path: "/desc/:id",
                name: "DescView",
                component: DescView,
            }
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;