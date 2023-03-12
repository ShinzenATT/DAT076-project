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

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

// Use plugin with defaults

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(VCalendar, {})
app.component('VueDatePicker', VueDatePicker);

registerPlugins(app)

app.mount('#app')
