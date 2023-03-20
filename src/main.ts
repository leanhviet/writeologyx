import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import FontIcon from '@/components/FontIcon/FontIcon.vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(PerfectScrollbar);
app.component('FontIcon', FontIcon);

app.mount('#app');
