<template>
  <div class="text-center mt-16 sp:mt-10">
    <!-- <router-link :to="url" class="btn-to-detail tab:btn-to-detail-m">{{ name }}の詳細はこちら</router-link> -->
    <router-link :to="url" class="inline-block text-xl font-bold py-5 px-14 rounded-lg border-2 border-yellow-500 text-yellow-500 tab:py-4 tab:px-10 tab:text-base sp:w-full">{{ name }}の詳細をみる</router-link>
  </div>
</template>

<script>
export default {
  props: ['url', 'name']
}
</script>