export interface ArticleRecord {
  _id?: string
  _path: string
  title: string
  date?: string
  description?: string
  category?: string
  body?: unknown
}

const getTimestamp = (date?: string) => {
  if (!date) { return 0 }
  const timestamp = new Date(date).getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
}

export const sortArticles = <T extends ArticleRecord>(articles: T[]) => {
  return [...articles].sort((first, second) => {
    const dateDifference = getTimestamp(second.date) - getTimestamp(first.date)
    if (dateDifference !== 0) { return dateDifference }
    return (second._id || '').localeCompare(first._id || '')
  })
}

export const getArticleNumber = (
  article: Pick<ArticleRecord, '_id' | '_path' | 'title'>,
  fallback: number
) => {
  const source = article._id || article._path
  const match = source.match(/(?:^|[:/])(\d+)[.-]/)
  return (match?.[1] || String(fallback)).padStart(3, '0')
}

const collectText = (value: unknown): string => {
  if (typeof value === 'string') { return value }
  if (Array.isArray(value)) { return value.map(collectText).join(' ') }
  if (value && typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).map(collectText).join(' ')
  }
  return ''
}

export const estimateReadingMinutes = (body: unknown) => {
  const text = collectText(body)
  const chineseCount = text.match(/[\u3400-\u9fff]/g)?.length || 0
  const englishCount = text
    .replace(/[\u3400-\u9fff]/g, ' ')
    .match(/[A-Za-z0-9]+/g)?.length || 0

  return Math.max(1, Math.ceil(chineseCount / 400 + englishCount / 220))
}

export const formatArticleDate = (date?: string) => {
  if (!date || Number.isNaN(new Date(date).getTime())) { return 'UNDATED' }
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

export const getHomeFeed = <T extends ArticleRecord>(
  articles: T[],
  recentLimit = 3
) => {
  return {
    featured: articles[0] || null,
    recent: articles.slice(1, recentLimit + 1)
  }
}

export const getAdjacentArticles = <T extends ArticleRecord>(
  articles: T[],
  currentPath: string
) => {
  const index = articles.findIndex(article => article._path === currentPath)
  if (index < 0) { return { previous: null, next: null } }

  return {
    previous: articles[index + 1] || null,
    next: articles[index - 1] || null
  }
}

export const calculateReadingProgress = (
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number
) => {
  const scrollable = scrollHeight - clientHeight
  if (scrollable <= 0) { return 0 }
  return Math.min(100, Math.max(0, Math.round((scrollTop / scrollable) * 100)))
}
