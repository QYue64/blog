import theme from '@nuxt-themes/tokens/config'
import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    $schema: {
      title: 'All the configurable tokens from Alpine.',
      tags: [
        '@studio-icon carbon:blog'
      ]
    },
    body: {
      backgroundColor: {
        initial: '#EDF4FF',
        dark: '#EDF4FF'
      },
      color: {
        initial: '#172030',
        dark: '#172030'
      }
    },
    specimen: {
      ice: '#EDF4FF',
      ink: '#172030',
      lime: '#C9FF5C',
      violet: '#7656EF',
      pink: '#FFB8DB',
      muted: '#596578',
      line: '#9BA7BA'
    },
    backdrop: {
      backgroundColor: {
        initial: '#17203038',
        dark: '#17203038'
      }
    },
    readableLine: '68ch'
  },
  elements: {
    container: {
      maxWidth: '64rem',
      padding: {
        mobile: '{space.6}',
        xs: '{space.8}',
        sm: '{space.12}',
        md: '{space.16}'
      }
    }
  },
  color: {
    white: '#FFFFFF',
    // @ts-ignore
    primary: theme.color.indigo
  },
  prose: {
    p: {
      fontSize: '17px'
    },
  }
})
