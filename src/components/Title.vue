<template>
  <div>
    <h1 class="title-l tab:title-m sp:text-2xl">{{ title }}</h1>
    <p class="mb-10 text-gray-800 text-center text-sm">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "caption"]
}
</script>