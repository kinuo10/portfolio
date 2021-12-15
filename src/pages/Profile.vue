<template>
  <section class="pt-32 pb-20 tab:pt-28">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="stateDefinedTitle" :caption="subpage.profile"></Title>
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
              <p>私はプログラミングに関わらず、元々何かを作ることが好きだったので、大学時代に初めてプログラムの処理を動かしたときに面白く感じ、その時からプログラミングに対して興味関心が強くなりました。仕事としては、現在フロントエンジニア歴2年ほどで、最近はWordPressやJavaScriptを触れる機会が多くなりました。プログラミングだけではなく、デザインやwebマーケティングといった制作後の運用も行なっています。モバイルファーストの設計やユーザビリティを考慮したデザイン配置が得意です。今後はNuxtやReactを中心に学習を進める予定です。</p>
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
                <li><a class="text-blue-500 border-b border-blue-500" href="https://twitter.com/kinuo_no_site">ツイッター</a></li>
                <li><a class="text-blue-500 border-b border-blue-500" href="https://qiita.com/kinuo6">Qiita</a></li>
                <li><a class="text-blue-500 border-b border-blue-500" href="https://github.com/kinuo10">Github</a></li>
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
import { titleCaption } from "@/assets/mixins/titleCaption"

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
  },
  mixins: [ titleCaption ]
}
</script>