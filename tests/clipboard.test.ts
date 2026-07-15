import { describe, expect, it, vi } from 'vitest'
import { copyText, resolveCopyText } from '../utils/clipboard'

describe('代码复制工具', () => {
  it('优先使用异步剪贴板接口', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    const fallback = vi.fn().mockReturnValue(true)

    expect(await copyText('hello', writeText, fallback)).toBe(true)
    expect(writeText).toHaveBeenCalledWith('hello')
    expect(fallback).not.toHaveBeenCalled()
  })

  it('异步剪贴板接口失败时使用降级复制', async () => {
    const writeText = vi.fn().mockRejectedValue(new Error('denied'))
    const fallback = vi.fn().mockReturnValue(true)

    expect(await copyText('hello', writeText, fallback)).toBe(true)
    expect(fallback).toHaveBeenCalledWith('hello')
  })

  it('内容组件未传 code 时使用已经渲染的代码文本', () => {
    expect(resolveCopyText(undefined, 'rendered code')).toBe('rendered code')
    expect(resolveCopyText('prop code', 'rendered code')).toBe('prop code')
  })
})
