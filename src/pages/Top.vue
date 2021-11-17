<template>
  <div>
    <TopFv></TopFv>
    <TopProfile></TopProfile>
    <TopSkill></TopSkill>
    <TopProduct></TopProduct>
  </div>
</template>

<script>
import TopFv from "../components/TopFv.vue"
import TopProfile from "../components/TopProfile.vue"
import TopSkill from "../components/TopSkill.vue"
import TopProduct from "../components/TopProduct.vue"

export default {
  components: {
    TopFv,
    TopProfile,
    TopSkill,
    TopProduct
  }
}
</script>