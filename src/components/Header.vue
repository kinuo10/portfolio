<template>
  <header class="h-20 fixed z-50 w-full bg-white text-lg">
    <div class="margin-auto max-w-7xl flex justify-between h-full items-center sp:w-11/12">
      <router-link to="">
        <figure class="h-20"><img :src="favicon" alt="" class="h-full"></figure>
      </router-link>
      <!-- PCヘッダー -->
      <ul class="flex sp:hidden">
        <li><router-link to="" class="mr-4">トップ</router-link></li>
        <li><router-link to="" class="mr-4">プロフィール</router-link></li>
        <li><router-link to="" class="mr-4">スキル</router-link></li>
        <li><router-link to="" class="mr-4">制作物</router-link></li>
      </ul>
      <!-- ハンバーガーメニュー -->
      <ul class="hidden sp:block sp:relative" @click="ham_trigger">
        <li class="w-10 h-0.5 bg-black absolute -top-2"></li>
        <li class="w-10 h-0.5 bg-black"></li>
        <li class="w-10 h-0.5 bg-black absolute top-2"></li>
      </ul>
    </div>
    <section v-show="hamFlag == true" class="h-screen bg-gray-50">
      <ul>
        <li><router-link class="abc" to="/">トップページ</router-link></li>
        <li><router-link class="abc" to="/">プロフィール</router-link></li>
      </ul>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      favicon: require('@/assets/img/profile_icon.png'),
      hamFlag: true
    }
  },
  created() {
    console.log(this.hamFlag);
  },
  methods: {
    ham_trigger: function() {
      this.hamFlag = !this.hamFlag;
      console.log(this.hamFlag);
    }
  }
}
</script>