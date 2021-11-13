<template>
  <div>
    <section class="relative p-fv bg-cover" :style="{ 'background-image': 'url(' + fvImage + ')' }">
      <h1 class="absolute text-white text-6xl bottom-0 pb-24 pl-16 tracking-wider leading-tight">Kinuo's<br>Portfolio</h1>
    </section>
    <TopProfile></TopProfile>
    <TopSkill></TopSkill>
    <TopProduct></TopProduct>
    <div style="height:400px;"></div>  
  </div>
</template>

<script>
import FvImage from "@/assets/img/background1.png"
import TopProfile from "../components/TopProfile.vue"
import TopSkill from "../components/TopSkill.vue"
import TopProduct from "../components/TopProduct.vue"

export default {
  data() {
    return {
      fvImage: FvImage
    }
  },
  components: {
    TopProfile,
    TopSkill,
    TopProduct
  }
}
</script>

<style scoped lang="scss">
  .p-fv {
    height: 90vh;
  }
</style>