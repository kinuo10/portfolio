<template>
  <section class="pt-32 pb-20 tab:pt-28">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="stateDefinedTitle" :caption="subpage.product"></Title>
      <ProductDisplay></ProductDisplay>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title.vue"
import ProductDisplay from "../components/ProductDisplay.vue"
import { titleCaption } from "@/assets/mixins/titleCaption"

export default {
  computed: {
    stateDefinedTitle() {
      const sectionTitle = this.$store.state.sectionTitle.productTitle
      return sectionTitle
    }
  },
  components: {
    Title,
    ProductDisplay
  },
  mixins: [ titleCaption ]
}
</script>