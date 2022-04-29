import { createApp } from "vue";
import { createPinia } from "pinia";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Toolbar from "primevue/toolbar";

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import SplitButton from "primevue/splitbutton";                           //icons

const app = createApp(App);

app.use(PrimeVue);
app.use(createPinia());
app.use(router);

app.component(`Dialog`, Dialog);
app.component(`Button`, Button);
app.component(`InputText`, InputText);
app.component(`Toolbar`, Toolbar);
app.component(`SplitButton`, SplitButton);

app.mount("#app");
