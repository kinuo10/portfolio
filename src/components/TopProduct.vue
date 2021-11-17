<template>
  <section class="top-section">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="sectionTitle"></Title>
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
      <BtnDetail url="/product" :name="sectionTitle"></BtnDetail>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue"
import BtnDetail from "./BtnDetail.vue"

export default {
  data() {
    return {
      sectionTitle: '制作物',
      // 制作物一覧
      products: [
        { 
          id: 1, image: require('@/assets/img/product/charge.jpg'), title: 'ファスト整体スタンドCHARGE', company: '株式会社SMILE CREATE GROUP', url: 'https://charge10.tokyo/' 
        },
        {
          id: 2, image: require('@/assets/img/product/me.jpg'), title: 'フェムケアブランドMe(ミー)', company: '株式会社SMILE CREATE GROUP', url: 'https://me-femcare.com/'
        },
        {
          id: 3, image: require('@/assets/img/product/first_view.png'), title: 'ポートフォリオ', company: 'このポートフォリオサイトです', url: 'http:localhost:8080'
        }
      ],  
    }
  },
  components: {
    Title,
    BtnDetail
  }
}
</script>