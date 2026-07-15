import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const articlesDirectory = resolve('.starters/default/content/articles')
const articleFiles = readdirSync(articlesDirectory)
  .filter(file => file.endsWith('.md'))
  .sort()

describe('博客内容契约', () => {
  it('每篇文章保留唯一数字前缀并包含分类', () => {
    const prefixes = articleFiles.map(file => file.match(/^(\d+)-/)?.[1])
    expect(prefixes.every(Boolean)).toBe(true)
    expect(new Set(prefixes).size).toBe(articleFiles.length)

    for (const file of articleFiles) {
      const content = readFileSync(resolve(articlesDirectory, file), 'utf8')
      expect(content).toMatch(/^---[\s\S]*\ncategory: .+[\s\S]*\n---/)
    }
  })

  it('首页和文章页调用新的内容组件', () => {
    const home = readFileSync(resolve('.starters/default/content/1.index.md'), 'utf8')
    const articles = readFileSync(resolve('.starters/default/content/2.articles.md'), 'utf8')
    expect(home).toContain('::home-specimen')
    expect(articles).toContain('::articles-list')
  })
})
