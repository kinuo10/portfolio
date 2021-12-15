<template>
  <section class="top-section tab:top-section-tab bg-gray-200">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="stateDefinedTitle" :caption="toppage.skill"></Title>
      <SkillDisplay :lists="languageLists" end="6"></SkillDisplay>
      <BtnDetail url="/skill" :name="stateDefinedTitle"></BtnDetail>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue"
import BtnDetail from "./BtnDetail.vue"
import SkillDisplay from "./SkillDisplay.vue"

import { titleCaption } from "@/assets/mixins/titleCaption"
import { skillList } from "@/assets/mixins/skillList.js"

export default {
  mixins: [ skillList, titleCaption ],
  computed: {
    stateDefinedTitle() {
      const title = this.$store.state.sectionTitle.skillTitle
      return title
    }
  },
  components: {
    Title,
    BtnDetail,
    SkillDisplay
  },
}
</script>
