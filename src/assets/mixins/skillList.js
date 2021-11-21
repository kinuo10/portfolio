export const skillList = {
  data() {
    return {
      languageLists: [
        { id: 1, language: 'HTML', image: require('@/assets/img/language_logos/html-5.svg'), text: 'HTMLは難易度が低いマークアップ言語ですが、フロントの実装にはかかせません。SEOを意識して、適切なタグを使用することを心がけてマークアップを行なっています。' },
        { id: 2, language: 'CSS', image: require('@/assets/img/language_logos/css-3.svg'), text: 'HTMLだけではデザイン性に欠けるので、CSSを使用します。CSSは行数が膨大な数になると、保守性、拡張性の面でつらいので、最近ではCSSプリプロセッサをよく使っています。' },
        { id: 3, language: 'JavaScript', image: require('@/assets/img/language_logos/javascript.svg'), text: 'HTML、CSSで作成した静的なコンテンツを動的にするために使用することが多いです。他にも非同期処理を使ってプログラミングすることがあります。' },
        { id: 4, language: 'WP', image: require('@/assets/img/language_logos/html-5.svg'), text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
        { id: 5, language: 'Photoshop', image: require('@/assets/img/language_logos/html-5.svg'), text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
        { id: 6, language: 'XD', image: require('@/assets/img/language_logos/html-5.svg'), text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
        { id: 7, language: 'vue', image: require('@/assets/img/language_logos/html-5.svg'), text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
      ],
      frameworkLists: [
        { id: 1, language: 'HTML', image: require('@/assets/img/language_logos/css-3.svg'), text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
        { id: 2, language: 'CSS', image: require('@/assets/img/language_logos/css-3.svg'), text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
        { id: 3, language: 'JS', image: require('@/assets/img/language_logos/css-3.svg'), text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
      ],
      otherLists: [
        { id: 1, language: 'WordPress', image: require('@/assets/img/language_logos/wordpress-icon.svg'), text: 'テーマ作成やカスタム投稿タイプなど、オリジナルのブログ、コーポレートサイトを作成する時によく使っています。サイト設計の段階からどのようなテーマにしたいか？どのようなページないし機能が欲しいかを明確に決めています。' },
        { id: 2, language: 'CSS', image: require('@/assets/img/language_logos/css-3.svg'), text: '' },
        { id: 3, language: 'JS', image: require('@/assets/img/language_logos/css-3.svg'), text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
      ]
    }
  }
} 