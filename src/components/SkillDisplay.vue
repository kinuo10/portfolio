<template>
  <ul class="p-skill__contents flex justify-between flex-wrap">
    <li class="p-skill__content sp:w-full" v-for="list in lists.slice(0, end)" :key="list.lang">
      <div class="margin-auto bg-white w-1/2 h-48 rounded-full flex">
        <img class="margin-auto w-4/5 h-3/5" :src=" list.image " alt="">
      </div>
      <div class="p-skill__text bg-white p-9 pt-20 pb-14 rounded-2xl sp:px-3">
        <h2 class="text-2xl font-bold text-center mb-3 sp:text-xl">{{ list.language }}</h2>
        <p>{{ list.text }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { skillList } from "@/assets/mixins/skillList.js"

export default {
  mixins: [ skillList ],
  props: [ "lists", "end" ]
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