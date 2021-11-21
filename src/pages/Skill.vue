<template>
  <section class="pt-32 pb-20 tab:pt-28 bg-gray-200">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="stateDefinedTitle"></Title>
      <div class="text-2xl font-bold text-center">プログラミング言語</div>
      <SkillDisplay :lists="languageLists" end="100" ></SkillDisplay>
      <div class="text-2xl font-bold text-center mt-16">フレームワーク・ライブラリ</div>
      <SkillDisplay :lists="frameworkLists" end="100"></SkillDisplay>
      <div class="text-2xl font-bold text-center mt-16">その他</div>
      <SkillDisplay :lists="otherLists" end="100"></SkillDisplay>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title.vue"
import SkillDisplay from "../components/SkillDisplay.vue"
import { skillList } from "@/assets/mixins/skillList.js"

export default {
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
  mixins: [ skillList ]
}
</script>