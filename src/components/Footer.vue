<template>
  <footer class="bg-gray-500">
    <div class="margin-auto max-w-7xl">
      <router-link to="" class="margin-auto block w-40 h-40">
        <img :src="favicon" alt="" class="w-full h-full">
      </router-link>
      <ul class="flex justify-center">
        <li class="mx-2"><router-link class="text-white" to="">プロフィール</router-link></li>
        <li class="mx-2"><router-link class="text-white" to="">スキル</router-link></li>
        <li class="mx-2"><router-link class="text-white" to="">制作物</router-link></li>
      </ul>
    </div>
    <small class="bg-black text-white font-bold w-full text-center block px-1">© 2021 Kinuo.</small>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      favicon: require('@/assets/favicon.png')
    }
  }
}
</script>