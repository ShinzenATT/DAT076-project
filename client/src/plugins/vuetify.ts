/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#E81B84',
          secondary: '#1A3A84',
        },
      },
      dark: {
        colors: {
          primary: '#E81B84',
          secondary: '#1A3A84',
        },
      }
    },
  },
})
