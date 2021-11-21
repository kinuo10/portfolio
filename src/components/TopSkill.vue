<template>
  <section class="top-section tab:top-section-tab bg-gray-200">
    <div class="margin-auto max-w-6xl w-11/12">
      <Title :title="stateDefinedTitle"></Title>
      <SkillDisplay :lists="languageLists" end="6"></SkillDisplay>
      <BtnDetail url="/skill" :name="stateDefinedTitle"></BtnDetail>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue"
import BtnDetail from "./BtnDetail.vue"
import SkillDisplay from "./SkillDisplay.vue"

import { skillList } from "@/assets/mixins/skillList.js"

export default {
  mixins: [ skillList ],
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
  }
}
</script>
