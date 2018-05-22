module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    linkExactActiveClass: 'active',
    base: '/'
  },
  head: {
    title: 'vue-paper-dashboard-nuxt',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: "/css/weather-icons.min.css"},
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  plugins: [
    {src: '~/plugins/charts', ssr: false},
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy'
  ],
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
