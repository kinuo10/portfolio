<template>
  <section class="top-section tab:top-section-tab">
    <div class="margin-auto max-w-5xl w-11/12">
      <Title :title="stateDefinedTitle"></Title>
      <div class="flex justify-between sp:flex-wrap sp:flex-col-reverse">
        <p class="p-profile__greeting w-7/12 tab:w-4/5 sp:w-full sp:leading-relaxed sp:mt-5">ご高覧ありがとうございます。web制作を中心として活動している「きぬお」と申します。私は大学時代に初めてプログラミングに触れました。そこからweb系という分野を知り、プログラミングに対して、興味関心が深っていきました。私が楽しくのめり込んでいったのもあり、web制作ができる会社にフロントエンドエンジニアとして入社しました。現在はWordPressを用いたwebサイト制作ないしLP制作が多く、これらを得意としています。このポートフォリオでは、プロフィール、私のスキル、制作物という3つのカテゴリに分けて作成しています。連絡先については、プロフィールにのせているので、メールアドレスの方からコンタクトをお願いします。</p>
        <!-- <ul class="">
           <li><img src="@/assets/img/book.png" alt=""></li>
          <li><img src="@/assets/img/note_pc.png" alt=""></li>
          <li></li>
        </ul>-->
        <figure class="h-80 w-80"><img class="" src="@/assets/img/profile_icon.png" alt=""></figure>
      </div>
      <BtnDetail url="/profile" :name="stateDefinedTitle"></BtnDetail>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue"
import BtnDetail from "./BtnDetail.vue"

export default {
  computed: {
    stateDefinedTitle() { // セクションのタイトルをstateから取得(グローバル)
      const sectionTitle = this.$store.state.sectionTitle.profileTitle // stateの変数を取得
      return sectionTitle
    }
  },
  components: {
    Title, // タイトルを表示させるためのコンポーネント
    BtnDetail, // 詳細ボタンを表示するコンポーネント,
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