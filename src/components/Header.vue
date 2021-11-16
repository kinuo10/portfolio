<template>
  <header class="h-20 fixed z-50 w-full bg-white text-lg">
    <div class="margin-auto max-w-7xl flex justify-between h-full items-center">
      <router-link to="">
        <figure class="h-20"><img :src="favicon" alt="" class="h-full"></figure>
      </router-link>
      <ul class="flex">
        <li><router-link to="" class="mr-4">トップ</router-link></li>
        <li><router-link to="" class="mr-4">プロフィール</router-link></li>
        <li><router-link to="" class="mr-4">スキル</router-link></li>
        <li><router-link to="" class="mr-4">制作物</router-link></li>
      </ul>
    </div>
  </header>
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