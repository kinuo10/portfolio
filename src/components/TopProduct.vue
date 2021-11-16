<template>
  <section class="top-section">
    <div class="margin-auto max-w-6xl w-11/12">
      <h1 class="top-title">制作物</h1>
      <ul class="flex justify-between">
        <li v-for="product in products" :key="product.id" class="border border-gray-200">
          <a :href="product.url" target="_blank">
            <figure class="h-56">
              <img class="h-full w-full" :src="product.image" alt="">
            </figure>
            <div class="py-5 px-3 border-t border-gray-200">
              <h3 class="text-lg font-bold">{{ product.title }}</h3>
              <p class="text-gray-600 mt-1 text-sm">{{ product.company }}</p>
            </div>
          </a>
        </li>
      </ul>
      <router-link to="" class="btn-to-detail">詳細はこちら</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // 制作物一覧
      products: [
        { 
          id: 1, image: require('@/assets/img/product/charge.jpg'), title: 'ファスト整体スタンドCHARGE', company: '株式会社SMILE CREATE GROUP', url: 'https://charge10.tokyo/' 
        },
        {
          id: 2, image: require('@/assets/img/product/me.jpg'), title: 'フェムケアブランドMe(ミー)', company: '株式会社SMILE CREATE GROUP', url: 'https://me-femcare.com/'
        }
      ],  
    }
  }
}
</script>