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

const app = createApp(App)
app.use(VCalendar, {})

registerPlugins(app)

app.mount('#app')
