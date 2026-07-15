export type ClipboardWriter = (_text: string) => Promise<void>
export type ClipboardFallback = (_text: string) => boolean

export const resolveCopyText = (code?: string, renderedText = '') => {
  return code || renderedText
}

export const copyText = async (
  text: string,
  writeText?: ClipboardWriter,
  fallback?: ClipboardFallback
) => {
  if (writeText) {
    try {
      await writeText(text)
      return true
    } catch {
      // 剪贴板权限被拒绝时继续使用兼容方案
    }
  }

  return fallback?.(text) || false
}
