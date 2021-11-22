<template>
  <section class="pt-32 pb-20 tab:pt-28">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="stateDefinedTitle"></Title>
      <div class="margin-auto max-w-4xl">
        <div class="flex justify-center flex-col">
          <div class="">
            <figure class="margin-auto w-1/3 rounded-full bg-gray-400">
              <img :src="profileImage" alt="">
            </figure>
            <h2 class="font-bold text-3xl text-center mt-2 sp:text-lg">きぬお</h2>
          </div>
          <div class="mt-14 sp:mt-10">
            <div>
              <h2 class="text-blue-400 text-2xl font-bold mb-1 sp:text-lg">自己紹介</h2>
              <p>はじめまして。web系のプログラミングが好きなので、今回ポートフォリオを作成してみました。プログラミングと出会ったのは大学時代です。最初に学習したのはC言語で、HTMLの書籍をきっかけにweb系への興味・関心が強くなりました。学習を続けるうちに仕事でもプログラミングをしたいと思いweb制作を選びました。現在はweb制作はもちろん、設計、デザイン、制作、開発をしながらフロントエンドエンジニアとして毎日を過ごしています。</p>
            </div>
            <div class="mt-10 sp:mt-8">
              <h2 class="text-blue-400 text-2xl font-bold mb-1 sp:text-lg">趣味</h2>
              <ul>
                <li>ネットサーフィン・ゲーム</li>
                <li>猫</li>
                <li>プログラミング</li>
                <li>コーヒー</li>
                <li>楽器</li>
              </ul>
            </div>
            <div class="mt-10 sp:mt-8">
              <h2 class="text-blue-400 text-2xl font-bold mb-1 sp:text-lg">SNS</h2>
              <ul>
                <li><a href="">ツイッター</a></li>
                <li><a href="">Qiita</a></li>
                <li><a href="">Github</a></li>
              </ul>
            </div>
            <div class="mt-10 sp:mt-8">
              <h2 class="text-blue-400 text-2xl font-bold mb-1 sp:text-lg">お問い合わせ</h2>
              <ul>
                <li>kinuo357@gmail.com までメールをお願いします。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title.vue"

export default {
  computed: {
    stateDefinedTitle() {
      const sectionTitle = this.$store.state.sectionTitle.profileTitle
      return sectionTitle
    },
    profileImage() {
      let profileImage = this.$store.state.faviconImage.imgPass
      return profileImage
    }
  },
  components: {
    Title
  }
}
</script>