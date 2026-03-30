<script lang="ts" setup>
const { navigation } = useContent()

const emits = defineEmits(['linkClick'])

// 自定义外部导航链接
const externalLinks = [
  { label: '笔记', href: 'https://memo.witque.cn:8888/', target: '_blank' },
  { label: '工具', href: 'https://pages.witque.cn/', target: '_blank' },
  { label: 'DSM', href: 'https://qnas.dsmynas.com:5001/', target: '_blank' },
  { label: 'Terminal', href: 'https://tunnel.witque.cn:8888/', target: '_blank' }
]

function handleClick() {
  emits('linkClick')
}
</script>

<template>
  <nav>
    <ul>
      <!-- 内部链接 -->
      <li
        v-for="link of navigation"
        :key="link._path"
      >
        <NuxtLink
          :to="link._path"
          @click="handleClick"
        >
          <span class="underline-fx" />
          {{ link.title }}
        </NuxtLink>
      </li>
      
      <!-- 外部链接 -->
      <li
        v-for="extLink of externalLinks"
        :key="extLink.href"
      >
        <a
          :href="extLink.href"
          :target="extLink.target"
          rel="noopener noreferrer"
          @click="handleClick"
        >
          <span class="underline-fx" />
          {{ extLink.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="ts">
css({
  nav: {
    ul: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      gap: '{space.4}',
      '@sm': {
        flexDirection: 'row',
        gap: '{space.8}',
      },
      a: {
        position: 'relative',
        '&.router-link-active': {
          color: '{color.primary.500}'
        },
        '.underline-fx': {
          position: 'absolute',
          bottom: '-4px',
          width: 0,
          height: '1px',
          backgroundColor: 'currentColor',
          transition: 'width 200ms ease-in-out',
          'a:hover &&': {
            width: '100%'
          }
        }
      },

    }
  }
})
</style>
