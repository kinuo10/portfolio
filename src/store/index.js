import Vue from 'vue'
import Vuex from 'vuex'
import { sectionTitle } from "./module/sectionTitle.js" // sectionTitle.jsで定義したvuexをimport
import { faviconImage } from "./module/favicon.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sectionTitle, // moduleとしてexport
    faviconImage
  }
})