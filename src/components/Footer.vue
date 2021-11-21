<template>
  <footer class="bg-gray-500">
    <div class="margin-auto max-w-7xl p-16">
      <router-link to="" class="margin-auto block w-40 h-40">
        <img :src="favicon" alt="" class="w-full h-full">
      </router-link>
      <ul class="flex justify-center mt-4">
        <li class="mx-2" v-for="link in links" :key="link.id">
          <router-link class="text-white" :to="link.url">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
    <small class="bg-black text-white font-bold w-full text-center block px-1 py-2">© 2021 Kinuo.</small>
  </footer>
</template>

<script>
// ナビのリンクを取得
import { linkList } from "@/assets/mixins/pageLink.js"

export default {
  mixins: [ linkList ],
  data() {
    return {
      // favicon: require('@/assets/favicon.png'),
      favicon: require('@/assets/img/profile_icon.png')
    }
  }
}
</script>