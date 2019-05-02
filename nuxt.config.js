module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '[A REMPLIR]',
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '[A REMPLIR]' }
    ]
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@ax2/lozad-module'
  ],
  manifest: {
    name: '[A REMPLIR]',
    short_name: '[A REMPLIR]',
    lang: 'fr',
    description: '[A REMPLIR]',
    theme_color: '[A REMPLIR]',
    background_color: '[A REMPLIR]',
  },
  meta: {
    name: '[A REMPLIR]',
    lang: 'fr',
    author: '[A REMPLIR]',
    ogHost: '[A REMPLIR]',
    ogImage: {
      path: '[A REMPLIR]',
      width: '[A REMPLIR]',
      height: '[A REMPLIR]',
      type: '[A REMPLIR]',
      alt: '[A REMPLIR]'
    },
    twitterCard: 'summary'
  },
  sitemap: {
    gzip: true
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '[A REMPLIR]' },
  /*
  ** Adding global SCSS files
  */
  css: [
    '@/assets/stylesheets/style.scss'
  ],
  workbox: {
  },
  lozad: {
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      });

      config.module.rules.push({
        test: /\.(png|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      });
    }
  }
}
