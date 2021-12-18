<template>
  <div id="app" class="font-body">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const routeObj = this.$route; // ルート情報を取得
    this.changeTitle(routeObj); 
  },
  methods: {
    changeTitle(routeObj) { // ページごとにタイトルを変更するメソッド
      if( routeObj.meta.title ) { // router.jsでタイトルが定義されていればタイトルを設定
        const pageTitle = routeObj.meta.title;
        document.title = pageTitle + '｜ポートフォリオ・web制作';
      } else {
        document.title = 'ポートフォリオ・web制作' // タイトルを取得できなかった時のデフォルトタイトル
      }
    }
  },
  watch: {
    $route(routeObj, from) { // eslint-disable-line
      this.changeTitle(routeObj) // タイトルの変更を監視
    }
  }
}
</script>

<style src="./assets/tailwind.css">
  
</style>
