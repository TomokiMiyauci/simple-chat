import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css'; 

Vue.use(Vuetify);
function loadStories() {
  require('../stories/index.js');
}
 
configure(loadStories, module);
