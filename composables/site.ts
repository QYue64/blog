export const siteNavigation = [
  { label: '文章', to: '/articles' },
  { label: '关于', to: '/#about' },
  { label: '链接', to: '/#links' }
]

export const externalLinks = [
  { label: '笔记', href: 'https://memo.witque.cn:8888/', target: '_blank' },
  { label: 'AI', href: 'https://queai.de', target: '_blank' },
  { label: 'DSM', href: 'https://qnas.dsmynas.com:5001/', target: '_blank' },
  { label: 'Terminal', href: 'https://tunnel.witque.cn:8888/', target: '_blank' }
]

export const keywords = ['AI', 'HOMELAB', 'DOCKER', 'OPENCLAW', 'CLOUDFLARE', 'NOTES']

export const getSiteBrand = (path: string) => {
  if (path === '/articles' || path === '/articles/') {
    return 'QYUE://LOGS'
  }

  const articleMatch = path.match(/^\/articles\/(\d+)(?:-|$)/)
  if (articleMatch) {
    return `QYUE://ENTRY_${articleMatch[1].padStart(3, '0')}`
  }

  return 'QYUE://HOME'
}
