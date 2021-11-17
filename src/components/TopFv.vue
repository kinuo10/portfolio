<template>
  <section class="relative p-fv bg-cover" :style="{ 'background-image': 'url(' + fvImage + ')' }">
    <h1 class="absolute text-white text-6xl bottom-0 pb-16 pl-16 tracking-wider leading-tight tab:text-4.6xl tab:pl-8 tab:pb-8 sp:text-4xl sp:p-4">Kinuo's<br>Portfolio</h1>
  </section>
</template>

<script>
import FvImage from "@/assets/img/background1.png"

export default {
  data() {
    return {
      fvImage: FvImage
    }
  }
}
</script>

<style scoped lang="scss">
  .p-fv {
    height: 90vh;
  }

  @include mq(tab) {
    .p-fv {
      height: 70vh;
    }
  }
</style>