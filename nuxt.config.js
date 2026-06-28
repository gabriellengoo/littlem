export default {
  target: 'static',
  server: {
    host: '127.0.0.1'
  },
  head: {
    title: 'Little Manna | In-home baby and toddler meal prep',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Little Manna is a personal in-home meal prep service for babies and toddlers 11 months+, cooked in your kitchen and tailored to your child.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/little-manna-favicon.png' },
      { rel: 'apple-touch-icon', href: '/images/little-manna-favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@500;700;800;900&family=Quicksand:wght@500;700&display=swap'
      }
    ]
  },
  css: ['~/assets/css/main.css']
}
