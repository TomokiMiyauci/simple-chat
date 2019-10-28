import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css'; 

Vue.use(Vuetify);

function loadStories() {
    const req = require.context('../stories', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
  
  }
  
  configure(loadStories, module);