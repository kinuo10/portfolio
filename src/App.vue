<template>
  <div id="app" class="font-body">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/tailwind.css">
  
</style>
