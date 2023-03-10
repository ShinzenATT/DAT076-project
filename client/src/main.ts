/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
// @ts-ignore
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

// Use plugin with defaults

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import {Vue3Mq} from "vue3-mq";

const app = createApp(App)
app.use(VCalendar, {});
app.use(Vue3Mq);

registerPlugins(app)

app.mount('#app')
