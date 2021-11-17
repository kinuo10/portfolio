<template>
  <section class="top-section tab:top-section-tab">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="sectionTitle"></Title>
      <div class="flex justify-between sp:flex-wrap sp:flex-col-reverse">
        <p class="p-profile__greeting w-6/12 tab:w-4/5 sp:w-full sp:leading-relaxed sp:mt-5">はじめまして。web系のプログラミングが好きなので、今回ポートフォリオを作成してみました。プログラミングと出会ったのは大学時代です。最初に学習したのはC言語で、HTMLの書籍をきっかけにweb系への興味・関心が強くなりました。学習を続けるうちに仕事でもプログラミングをしたいと思いweb制作を選びました。現在はweb制作はもちろん、設計、デザイン、制作、開発をしながらフロントエンドエンジニアとして毎日を過ごしています。</p>
        <ul class="flex">
          <li><img src="@/assets/img/book.png" alt=""></li>
          <li><img src="@/assets/img/note_pc.png" alt=""></li>
        </ul>
      </div>
      <BtnDetail url="/profile" :name="sectionTitle"></BtnDetail>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue"
import BtnDetail from "./BtnDetail.vue"

export default {
  data() {
    return {
      sectionTitle: 'プロフィール'
    }
  },
  components: {
    Title,
    BtnDetail
  }
}
</script>

<style scoped lang="scss">
  @include mq(sp) {
    .p-profile {
      &__greeting {
        font-size: 15px;
      }
    }
  }
</style>