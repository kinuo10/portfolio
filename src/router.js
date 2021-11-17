import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Header from "./components/Header.vue";
import Top from "./pages/Top.vue";
import Profile from "./pages/Profile.vue";
import Footer from "./components/Footer.vue";

export default new Router ({
  routes: [
    { path: '/', components: { default: Top, header: Header, footer: Footer } },
    { path: '/profile', components: { default: Profile, header: Header, footer: Footer } }
  ],
  mode: 'history'
})