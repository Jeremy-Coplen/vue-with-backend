import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Post from "./components/ReusableComponents/Post/Post.vue"

const app = createApp(App)

app.use(router)

app.component("PostsAppPost", Post)

app.mount('#app')
