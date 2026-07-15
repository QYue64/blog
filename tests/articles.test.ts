import { describe, expect, it } from 'vitest'
import {
  calculateReadingProgress,
  estimateReadingMinutes,
  formatArticleDate,
  getAdjacentArticles,
  getArticleEntries,
  getArticleNumber,
  getHomeFeed,
  sortArticles
} from '../utils/articles'

const articles = [
  { _id: 'articles:08-old.md', _path: '/articles/old', title: '旧文章', date: '2024-01-01' },
  { _id: 'articles:10-new.md', _path: '/articles/new', title: '新文章', date: '2026-01-01' },
  { _id: 'articles:09-middle.md', _path: '/articles/middle', title: '中间文章', date: '2025-01-01' }
]

describe('文章数据工具', () => {
  it('按日期倒序排序并保持原数组不变', () => {
    const sorted = sortArticles(articles)
    expect(sorted.map(article => article._path)).toEqual([
      '/articles/new',
      '/articles/middle',
      '/articles/old'
    ])
    expect(articles[0]._path).toBe('/articles/old')
  })

  it('文章集合排除索引页和非文章路径', () => {
    const entries = getArticleEntries([
      ...articles,
      { _path: '/articles', title: '所有记录' },
      { _path: '/about', title: '关于' }
    ])
    expect(entries.map(article => article._path)).toEqual([
      '/articles/old',
      '/articles/new',
      '/articles/middle'
    ])
  })

  it('缺少日期时排在最后，同日按 _id 倒序', () => {
    const sorted = sortArticles([
      { _id: 'articles:01-a.md', _path: '/a', title: 'A', date: '2026-01-01' },
      { _id: 'articles:02-b.md', _path: '/b', title: 'B', date: '2026-01-01' },
      { _id: 'articles:03-c.md', _path: '/c', title: 'C' }
    ])
    expect(sorted.map(article => article._path)).toEqual(['/b', '/a', '/c'])
  })

  it('从文件名前缀生成稳定的三位编号', () => {
    expect(getArticleNumber(articles[1], 2)).toBe('010')
    expect(getArticleNumber({ _path: '/articles/no-prefix', title: '无编号' }, 2)).toBe('002')
  })

  it('同时估算中英文阅读时间且最少一分钟', () => {
    expect(estimateReadingMinutes({ children: [{ value: '短文本 hello world' }] })).toBe(1)
    const longText = `${'中'.repeat(800)} ${'word '.repeat(220)}`
    expect(estimateReadingMinutes({ value: longText })).toBe(3)
  })

  it('使用中文日期并安全处理缺失日期', () => {
    expect(formatArticleDate('2026-01-01')).toBe('2026年1月1日')
    expect(formatArticleDate()).toBe('UNDATED')
    expect(formatArticleDate('invalid')).toBe('UNDATED')
  })

  it('首页拆出一篇重点文章和指定数量最近文章', () => {
    const feed = getHomeFeed(sortArticles(articles), 2)
    expect(feed.featured?._path).toBe('/articles/new')
    expect(feed.recent.map(article => article._path)).toEqual(['/articles/middle', '/articles/old'])
  })

  it('首页文章不足时不会产生空日志行', () => {
    const feed = getHomeFeed([articles[1]], 3)
    expect(feed.featured?._path).toBe('/articles/new')
    expect(feed.recent).toEqual([])
  })

  it('使用相同排序关系计算上一篇和下一篇', () => {
    const adjacent = getAdjacentArticles(sortArticles(articles), '/articles/middle')
    expect(adjacent.previous?._path).toBe('/articles/old')
    expect(adjacent.next?._path).toBe('/articles/new')
  })

  it('当前路径不存在时上下篇都为空', () => {
    expect(getAdjacentArticles(sortArticles(articles), '/missing')).toEqual({
      previous: null,
      next: null
    })
  })

  it('把滚动位置限制在 0 到 100', () => {
    expect(calculateReadingProgress(0, 1000, 500)).toBe(0)
    expect(calculateReadingProgress(250, 1000, 500)).toBe(50)
    expect(calculateReadingProgress(900, 1000, 500)).toBe(100)
  })

  it('没有可滚动内容时进度为零', () => {
    expect(calculateReadingProgress(100, 500, 500)).toBe(0)
  })
})
