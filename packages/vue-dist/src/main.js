import { createApp } from 'vue'
import App from './App.vue'
import { Button, message } from 'ant-design-vue';


const app = createApp(App);
app.config.productionTip = false;
app.config.globalProperties.$message = message;

app.use(Button);
app.mount('#dev-tool')

