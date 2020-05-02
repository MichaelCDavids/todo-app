import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
    icons: {
        iconfont: "md"
    },
    theme: {
        primary: "blue",
        secondary: "green",
        info: "yellow",
        error: "red",

    }
});

export default new Vuetify({
});
