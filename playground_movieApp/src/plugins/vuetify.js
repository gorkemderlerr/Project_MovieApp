import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import api from "../source/api"
import Carousel3d from 'vue-carousel-3d';

Vue.use(Vuetify);
Vue.use(Carousel3d);
Vue.prototype.$http = api;

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    },

    theme: {
        themes: {
          light: {
            primary: "#14C6FF",
            secondary: "#424242",
            accent: "#82B1FF",
            error: "rgb(74, 20, 140)",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
            lightblue: "#14c6FF",
            yellow: "#FFCF00",
            pink: "#FF1976",
            orange: "#FF8657",
            magenta: "#C33AFC",
            darkblue: "#1E2D56",
            gray: "#909090",
            neutralgray: "#9BA6C1",
            green: "#2ED47A",
            red: "#4A148C",
            darkblueshade: "#308DC2",
            lightgray: "#BDBDBD",
            lightpink: "#FFCFE3",
            white: "#FFFFFF"
            
          }
        }
      }

});
