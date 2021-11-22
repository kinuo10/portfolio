<template>
  <section class="pt-32 pb-20 tab:pt-28">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="stateDefinedTitle"></Title>
      <ProductDisplay></ProductDisplay>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title.vue"
import ProductDisplay from "../components/ProductDisplay.vue"

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
  }
}
</script>