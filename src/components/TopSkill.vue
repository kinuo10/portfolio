<template>
  <section class="top-section tab:top-section-tab bg-gray-200">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="sectionTitle"></Title>
      <ul class="p-skill__contents flex justify-between flex-wrap">
        <li class="p-skill__content sp:w-full" v-for="skill in skills" :key="skill.lang">
          <div class="margin-auto bg-white w-1/2 h-48 rounded-full flex">
            <img class="margin-auto w-4/5 h-3/5" :src=" skill.image " alt="">
          </div>
          <div class="p-skill__text bg-white p-9 pt-20 pb-14 rounded-2xl sp:px-3">
            <h2 class="text-2xl font-bold text-center mb-3 sp:text-xl">{{ skill.lang }}</h2>
            <p>{{ skill.text }}</p>
          </div>
        </li>
      </ul>
      <!-- <router-link to="" class="btn-to-detail">詳細はこちら</router-link> -->
      <BtnDetail url="/skill" :name="sectionTitle"></BtnDetail>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue"
import BtnDetail from "./BtnDetail.vue"

export default {
  data() {
    return {
      sectionTitle: '技術紹介',
      // スキル一覧
      skills: [
        { 
          lang: 'HTML', 
          text: 'HTMLは難易度が低いマークアップ言語ですが、フロントの実装にはかかせません。SEOを意識して、適切なタグを使用することを心がけてマークアップを行なっています。',
          image: require('@/assets/img/language_logos/html-5.svg')
        },
        { 
          lang: 'CSS',
          text: 'HTMLだけではデザイン性に欠けるので、CSSを使用します。CSSは行数が膨大な数になると、保守性、拡張性の面でつらいので、最近ではCSSプリプロセッサをよく使っています。',
          image: require('@/assets/img/language_logos/css-3.svg')
        },
        { 
          lang: 'JavaScript', 
          text: 'HTML、CSSで作成した静的なコンテンツを動的にするために使用することが多いです。他にも非同期処理を使ってプログラミングすることがあります。',
          image: require('@/assets/img/language_logos/javascript.svg')
        },
        { 
          lang: 'WordPress', 
          text: 'テーマ作成やカスタム投稿タイプなど、オリジナルのブログ、コーポレートサイトを作成する時によく使っています。サイト設計の段階からどのようなテーマにしたいか？どのようなページないし機能が欲しいかを明確に決めています。',
          image: require('@/assets/img/language_logos/wordpress-icon.svg')
        },
        { 
          lang: 'Photoshop', 
          text: 'テーマ作成やカスタム投稿タイプなど、オリジナルのブログ、コーポレートサイトを作成する時によく使っています。サイト設計の段階からどのようなテーマにしたいか？どのようなページないし機能が欲しいかを明確に決めています。',
          image: require('@/assets/img/language_logos/photoshop.svg')
        },
      ]
    }
  },
  components: {
    Title,
    BtnDetail
  }
}
</script>

<style scoped lang="scss">
  .p-skill {
    &__contens {
      margin-top: -60px;
    }
    &__content {
      margin-top: 60px;
      width: 30%;
    }
    &__text {
      margin-top: -100px;
    }
  }

  @include mq(tab) {
    .p-skill {
      &__content {
        width: 48%;
      }
    }
  }

  @include mq(sp) {
    .p-skill {
      &__content {
        width: 100%;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
</style>