import { createApp } from "vue";
import App from "./App.vue";


import compHeader from './components/header_footer/header.vue';

var app = createApp(App);

app.component('compHeader', compHeader)

app.mount("#app");