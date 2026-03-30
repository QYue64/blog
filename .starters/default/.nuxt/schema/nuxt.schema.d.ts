export interface NuxtCustomSchema {
 appConfig?: {
  /**
   * Nuxt Icon
   * 
   * Configure the defaults of Nuxt Icon
   * 
  */
  nuxtIcon?: {
   /**
    * Icon Size
    * 
    * Set the default icon size. Set to false to disable the sizing of icon in style.
    * 
    * @default "1em"
    * 
    * @studioIcon material-symbols:format-size-rounded
   */
   size?: string | false,

   /**
    * CSS Class
    * 
    * Set the default CSS class
    * 
    * @default ""
    * 
    * @studioIcon material-symbols:css
   */
   class?: string,

   /**
    * Icon aliases
    * 
    * Define Icon aliases to update them easily without code changes.
    * 
    * 
    * @studioIcon material-symbols:star-rounded
    * 
    * @studioInputObjectValueType icon
   */
   aliases?: { [alias: string]: string },
  },

  prose?: {
   copyButton?: {
    /** @default "ph:copy" */
    iconCopy?: string,

    /** @default "ph:check" */
    iconCopied?: string,
   },

   headings?: {
    /** @default "ph:link" */
    icon?: string|false,
   },

   h1?: {
    /** @default "" */
    icon?: string|false,
   },

   h2?: {
    /** @default "" */
    icon?: string|false,
   },

   h3?: {
    /** @default "" */
    icon?: string|false,
   },

   h4?: {
    /** @default "" */
    icon?: string|false,
   },

   h5?: {
    /** @default "" */
    icon?: string|false,
   },

   h6?: {
    /** @default "" */
    icon?: string|false,
   },
  },

  alpine?: {
   /** @default "Alpine" */
   title?: string,

   /** @default "The minimalist blog theme" */
   description?: string,

   image?: {
    /** @default "/social-card-preview.png" */
    src?: string,

    /** @default "An image showcasing my project." */
    alt?: string,

    /** @default 400 */
    width?: number,

    /** @default 300 */
    height?: number,
   },

   header?: {
    /** @default "right" */
    position?: 'left'|'center'|'right',

    logo?: {
     /** @default "/logo.svg" */
     path?: string,

     /** @default "/logo-dark.svg" */
     pathDark?: string,

     /** @default "Alpine theme logo" */
     alt?: string,
    },
   },

   footer?: {
    credits?: {
     /** @default true */
     enabled?: boolean,

     /** @default "Alpine" */
     text?: string,

     /** @default "https://www.github.com/nuxt-themes/alpine" */
     repository?: string,
    },

    /** @default true */
    navigation?: boolean,

    /** @default "center" */
    alignment?: 'left'|'center'|'right',

    /** @default "Follow me on" */
    message?: string,
   },

   socials?: {
    /** @default "" */
    twitter?: string,

    /** @default "" */
    instagram?: string,

    /** @default "" */
    github?: string,

    /** @default "" */
    facebook?: string,

    /** @default "" */
    medium?: string,

    /** @default "" */
    youtube?: string,
   },

   form?: {
    /** @default "Message sent. Thank you!" */
    successMessage?: string,
   },

   backToTop?: {
    /** @default "material-symbols:arrow-upward" */
    icon?: string,

    /** @default "Back to top" */
    text?: string,
   },
  },
 },
}
export type CustomAppConfig = Exclude<NuxtCustomSchema['appConfig'], undefined>
type _CustomAppConfig = CustomAppConfig

declare module '@nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}
