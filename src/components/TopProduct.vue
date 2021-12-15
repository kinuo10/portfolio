<template>
  <section class="top-section">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="stateDefinedTitle" :caption="toppage.product"></Title>
      <ProductDisplay></ProductDisplay>
      <BtnDetail url="/product" :name="stateDefinedTitle"></BtnDetail>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue"
import BtnDetail from "./BtnDetail.vue"
import ProductDisplay from "./ProductDisplay.vue"

import { titleCaption } from "@/assets/mixins/titleCaption"

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
        },
        {
          id: 3, image: require('@/assets/img/product/first_view.png'), title: 'ポートフォリオ', company: 'このポートフォリオサイトです', url: 'http:localhost:8080'
        }
      ],  
    }
  },
  components: {
    Title,
    BtnDetail,
    ProductDisplay
  },
  computed: {
    stateDefinedTitle() {
      const title = this.$store.state.sectionTitle.productTitle
      return title
    }
  },
  mixins: [ titleCaption ]
}
</script>