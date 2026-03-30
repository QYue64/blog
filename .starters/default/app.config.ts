// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: '雀雀博客',
    description: '这里是雀雀的新博客，基于 Alpine 二次开发，一个由 Nuxt 驱动的 Markdown 博客系统.',
    image: {
      src: '/social-card-preview.png',
      alt: '雀雀博客',
      width: 400,
      height: 300
    },
    header: {
      position: 'right'
    },
    footer: {
      credits: {
        enabled: true,
        text: '浙 ICP 备 18035094 号 -1',
        repository: 'https://beian.miit.gov.cn/'
      },
      navigation: false,
      alignment: 'center',
      message: ''
    },
    socials: {},
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
