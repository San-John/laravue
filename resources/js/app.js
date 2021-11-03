// window._ = require("lodash");
import "bootstrap";

require('alpinejs');

import { createApp } from 'vue';
import routes from './routes/routes'

import Sidebar from './components/back_end/layouts/sidebar'
import Top from './components/back_end/layouts/top'
import FooterMenu from './components/back_end/layouts/footer-menu'
import Content from './components/back_end/layouts/content-menu'

createApp({
    components: {
        Sidebar,
        Top,
        Content,
        FooterMenu
    }
}).use(routes).mount('#app')
