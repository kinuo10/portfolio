module.exports = {
  theme: {
    screens: {
      // 独自のブレイクポイントを記述
      // max-width使いたい時は、valueをオブジェクトで指定する
      tab: {'max': '1024px'},
      sp: {'max': '599px'}
    },
    fontFamily: {
      body: ['Noto Sans JP', 'Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif']
    }
  },
  variants: {
    margin: ['responsive', 'first', 'hover', 'focus'],
  }
}