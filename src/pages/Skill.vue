<template>
  <section class="pt-32 pb-20 tab:pt-28 bg-gray-200">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="stateDefinedTitle" :caption="subpage.skill"></Title>
      <div class="text-2xl font-bold text-center sp:mb-8 sp:text-xl" @click="isMobileVisible(isMobileWidth)">プログラミング言語</div>
      <SkillDisplay :lists="languageLists" end="100" :class="{ 'is-mobile-hidden': isMobileFlag }"></SkillDisplay>
      <div class="text-2xl font-bold text-center mt-16 sp:mb-8 sp:text-xl" @click="isMobileVisible(isMobileWidth)">フレームワーク・ライブラリ</div>
      <SkillDisplay :lists="frameworkLists" end="100" :class="{ 'is-mobile-hidden': isMobileFlag }"></SkillDisplay>
      <div class="text-2xl font-bold text-center mt-16 sp:mb-8 sp:text-xl" @click="isMobileVisible(isMobileWidth)">その他</div>
      <SkillDisplay :lists="otherLists" end="100" :class="{ 'is-mobile-hidden': isMobileFlag }"></SkillDisplay>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title.vue"
import SkillDisplay from "../components/SkillDisplay.vue"
import { skillList } from "@/assets/mixins/skillList.js"
import { titleCaption } from "@/assets/mixins/titleCaption"

export default {
  data() {
    return {
      isMobileFlag: false,
      isMobileWidth: 0
    }
  },
  methods: {
    isMobileJudge(judgeNum) { // スマホかPCを判定する
      if( judgeNum < 559 ) {
        this.isMobileFlag = true;
      } else {
        this.isMobileFlag = false;
      }
    },
    isMobileVisible(width) { // スマホでクリックイベントが発動した時に、表示非表示を切り替える
      if (width > 559) { // PCでもし押されてしまったら何も処理を変更しない
        this.isMobileFlag = false
      } else {
        this.isMobileFlag = !this.isMobileFlag
      }
    }
  },
  computed: {
    stateDefinedTitle() {
      const sectionTitle = this.$store.state.sectionTitle.skillTitle
      return sectionTitle
    }
  },
  components: {
    Title,
    SkillDisplay
  },
  mixins: [ skillList, titleCaption ]
}
</script>

<style scoped lamg="scss">
  .is-mobile-hidden {
    display: none;
  }
</style>