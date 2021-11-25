<template>
  <header class="h-20 fixed z-50 w-full bg-white text-lg border-b border-gray-100">
    <div class="margin-auto max-w-7xl flex justify-between h-full items-center sp:w-11/12">
      <router-link to="/">
        <figure class="h-16">
          <img :src="favicon" alt="" class="h-full">
        </figure>
      </router-link>
      <!-- PCヘッダーナビ -->
      <ul class="flex sp:hidden">
        <li v-for="link in links" :key="link.id">
          <router-link :to="link.url" class="mr-5">{{ link.name }}</router-link>
        </li>
      </ul>
      <!-- ハンバーガーメニュー 3本ライン -->
      <ul class="hidden sp:block sp:relative" @click="ham_trigger">
        <li class="w-10 h-0.5 bg-black absolute -top-2" id="line1"></li>
        <li class="w-10 h-0.5 bg-black" id="line2"></li>
        <li class="w-10 h-0.5 bg-black absolute top-2" id="line3"></li>
      </ul>
    </div>
    <!-- ハンバーガーメニュー 中身 -->
    <transition name="appear">
      <section v-show="hamFlag == true" class="h-screen bg-white">
        <ul class="margin-auto w-11/12">
          <li class="py-4 text-xl border-b border-black" v-for="link in links" :key="link.id" @click="ham_trigger">
            <router-link :to="link.url" class="flex justify-between items-center">
              {{ link.name }}
              <img :src="arrowImage" class="h-5 inline-block">
            </router-link>
          </li>
        </ul>
      </section>
    </transition>
  </header>
</template>

<script>
import { linkList } from "@/assets/mixins/pageLink.js"

export default {
  data() {
    return {
      favicon: require('@/assets/img/profile_icon.png'),
      arrowImage: require('@/assets/img/arrow_right.png'),
      hamFlag: false,
      // hamLinks: [
      //   { id: 1, url: '/', name: 'トップページ' },
      //   { id: 2, url: '/profile', name: 'プロフィール' },
      //   { id: 3, url: '/skill', name: 'スキル' },
      //   { id: 4, url: '/product', name: '制作物' },
      // ]
    }
  },
  mixins: [ linkList ],
  methods: {
    // ハンバーガーメニューに関する関数
    ham_trigger: function() {
      this.hamFlag = !this.hamFlag; // ハンバーガーメニューがクリックされるたびにトリガー値を切り替え
      const line1 = document.getElementById('line1'); // 一本目の線を取得
      const line2 = document.getElementById('line2'); // 二本目の線を取得
      const line3 = document.getElementById('line3'); // 三本目の線を取得
      if( this.hamFlag == true ) { // トリガーがtrueのとき
        // 三本線を斜めにする
        // 上の線を曲げる
        line1.classList.remove("top_line_0deg");
        line1.classList.add("top_line_45deg");
        // 真ん中の線を消す
        line2.classList.remove("center_line_appear");
        line2.classList.add("center_line_hidden");
        // 下の線を曲げる
        line3.classList.remove("under_line_0deg");
        line3.classList.add("under_line_45deg");
      } else { // trigerがfalseのとき
        // 三本線を元に戻す
        // 上の線をもとに戻す
        line1.classList.remove("top_line_45deg");
        line1.classList.add("top_line_0deg");
        // 真ん中の線を表示する
        line2.classList.remove("center_line_hidden");
        line2.classList.add("center_line_appear");
        // 下の線をもとに戻す
        line3.classList.remove("under_line_45deg");
        line3.classList.add("under_line_0deg");
      }
    }
  }
}
</script>

<style scoped lang="scss">
  // ハンバーガーメニューの開閉アニメーション
  .appear-enter, .appear-leave-to {
    opacity: 0;
  }
  .appear-enter-to, .appear-leave {
    opacity: 1;
  }
  .appear-enter-active {
    transition: opacity .7s;
  }
  .appear-leave-active {
    transition: opacity .7s;
  }
  // 上の線
  .top_line_45deg {
    transition: transform .5s;
    transform: rotate(45deg);
    top: 0;
  }
  .top_line_0deg {
    transition: transform .5s;
    transform: rotate(0deg);
  }
  // 真ん中の線 
  .center_line_hidden {
    visibility: hidden;
  }
  .center_line_appear {
    visibility: visible;
  }
  // 下の線
  .under_line_45deg {
    transition: transform .5s;
    transform: rotate(-45deg);
    top: 0;
  }
  .under_line_0deg {
    transition: transform .5s;
    transform: rotate(0deg);
  }
</style>