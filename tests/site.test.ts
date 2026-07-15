import { describe, expect, it } from 'vitest'
import { externalLinks, keywords, siteNavigation } from '../composables/site'

describe('站点导航', () => {
  it('只暴露已批准的主导航', () => {
    expect(siteNavigation).toEqual([
      { label: '文章', to: '/articles' },
      { label: '关于', to: '/#about' },
      { label: '链接', to: '/#links' }
    ])
  })

  it('保留四个现有外部入口', () => {
    expect(externalLinks.map(link => link.label)).toEqual(['笔记', 'AI', 'DSM', 'Terminal'])
    expect(externalLinks.every(link => link.target === '_blank')).toBe(true)
  })

  it('关键词来自真实内容主题', () => {
    expect(keywords).toEqual(['AI', 'HOMELAB', 'DOCKER', 'OPENCLAW', 'CLOUDFLARE', 'NOTES'])
  })
})
