export const skillList = {
  data() {
    return {
      languageLists: [
        { id: 1, language: 'HTML', image: require('@/assets/img/language_logos/html-5.svg'), text: 'HTMLはprogateで学習をしました。基本的に頻出するタグを覚えて、あとは制作の経験を積みながら使用しています。' },
        { id: 2, language: 'CSS', image: require('@/assets/img/language_logos/css-3.svg'), text: 'HTMLと同じく、progateで学習をしました。CSSプリプロセッサを使用することが多くなってきたので、直接CSSを記述することは減りました。' },
        { id: 3, language: 'JavaScript', image: require('@/assets/img/language_logos/javascript.svg'), text: 'Progateと書籍を使って学習しました。アニメーションを実装したいときなど、今でも使う機会は多いです。JavaScriptもライブラリやフレームワークを使うことが多いです。' },
        { id: 4, language: 'PHP', image: require('@/assets/img/language_logos/php.svg'), text: 'WordPressで自作テーマを制作するときに必要だったのがPHPに触れたきっかけです。WordPressの自作テーマやメールフォームを作成するときにかかせない存在となっています。' },
      ],
      frameworkLists: [
        { id: 1, language: 'Sass', image: require('@/assets/img/language_logos/sass.svg'), text: 'CSSを1000行くらい書いて可読性が詰んでしまい、良い方法を探していたときにSassの存在を知りました。ネスト構造や変数など便利で今でもよく使っています。scssを基本に、FLOCSSとBEMを用いています。' },
        { id: 2, language: 'tailwindcss', image: require('@/assets/img/language_logos/tailwindcss-icon.svg'), text: 'SassでかなりCSSの保守性は良くなったのですが、そもそもCSSを書かないで制作してみたいと思ったのがtailwindcssを試してみたきっかけです。当サイトにも一部使っています。' },
        { id: 3, language: 'Vue.js', image: require('@/assets/img/language_logos/vue.svg'), text: 'SPA構築やHRM、コンポーネント指向などに興味があったので、Vue.jsを学習しました。このポートフォリオサイトもVue.jsで作成しています。' },
      ],
      otherLists: [
        { id: 1, language: 'WordPress', image: require('@/assets/img/language_logos/wordpress-icon.svg'), text: 'コーポレートサイト、ブランドサイトなど自作のテーマを用いて制作しています。テンプレートタグを使用できることや、PHPでコードの記述をできることから今でも制作の際にはお世話になっているCMSです。' },
        { id: 2, language: 'Photoshop', image: require('@/assets/img/language_logos/photoshop.svg'), text: '画像の修正や合成、トリミングをする際に使用しています。LPやwebページなどのワーヤーフレームを作成するときに便利でしたが、最近ではXDを使っています。' },
        { id: 3, language: 'SEO対策', image: require('@/assets/img/language_logos/google-analytics.svg'), text: 'Googleアナリティクス・Search Console・SEO内部対策を中心にwebページのSEO対策をしています。' },
      ]
    }
  }
} 