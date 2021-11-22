<template>
  <ul class="flex justify-between tab:flex-wrap">
    <li v-for="product in products" :key="product.id" class="border border-gray-200 w-1/4 tab:w-2/5 tab:mb-3 sp:mb-0 sp:w-full sp:mt-6 sp:first:mt-0">
      <a :href="product.url" target="_blank">
        <figure class="h-56">
          <img class="h-full w-full sp:object-cover" :src="product.image" alt="">
        </figure>
        <div class="py-5 px-3 border-t border-gray-200">
          <h3 class="text-lg font-bold">{{ product.title }}</h3>
          <p class="text-gray-600 mt-1 text-sm">{{ product.company }}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { productList } from "@/assets/mixins/productList.js"

export default {
  mixins: [ productList ]
}
</script>