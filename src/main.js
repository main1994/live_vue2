import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

// 引入全局css,清除默认样式
import './assets/css/normalize.css'
// 引入样式
import './assets/css/style.css'
// 引入组件库
import './assets/js/index.js'

//引入VueRouter
import VueRouter from "vue-router"

//引入store
import store from './store/index.js'

//引入路由器
import router from './router/index.js'

//引入websocket
import websocket from 'vue-native-websocket';

import { Header, Button, Field, Toast, Navbar, TabItem, TabContainer, TabContainerItem ,Cell} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Field.name, Field);
Vue.component(Toast.name, Toast);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

Vue.use(VueRouter);

Vue.use(websocket, '', {
  connectManually: true, // 手动连接
  format: 'json', // json格式
  reconnection: true, // 是否自动重连
  reconnectionAttempts: 5, // 自动重连次数
  reconnectionDelay: 2000, // 重连间隔时间
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$http = axios;
    Vue.prototype.$toast = Toast;
  },
}).$mount('#app')
