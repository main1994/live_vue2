// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import Login from "../components/Login/Login.vue";
import Index from "../components/Index/Index.vue";

//创建并暴露一个路由器
export default new VueRouter({
    // mode: 'history',
    routes: [
        // 路由默认跳转
        {
            path: '/', // 如果路由为/
            redirect: '/Login', //重定向到登录组件
            beforeEnter: (to, from, next) => {
                //清除登录状态
                if (new Date().getTime() - localStorage.getItem('expireDate') > 60 * 60 * 1000) {
                    localStorage.removeItem('login');
                    localStorage.removeItem('expireDate');
                }
                next()
            }
        },
        {
            name: 'Login',
            path: "/Login",
            meta: { 'name': '登录' },
            component: Login,
        },
        {
            name: 'Index',
            path: "/Index",
            component: Index,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('login') === 'true') {
                    next()
                }
            }
        },
    ],
});
