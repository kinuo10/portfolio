export const linkList = {
  data() {
    return {
      links: [ // ヘッダーとフッターのリンク(共通)の配列
        { id: 1, url: '/', name: 'トップページ' },
        { id: 2, url: '/profile', name: 'プロフィール' },
        { id: 3, url: '/skill', name: 'スキル' },
        { id: 4, url: '/product', name: '制作物' }
      ]
    }
  }
}