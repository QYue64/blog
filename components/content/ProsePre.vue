<script setup lang="ts">
import { copyText, resolveCopyText } from '../../utils/clipboard'

const props = defineProps<{
  code?: string
  language?: string
  filename?: string
}>()

const copied = ref(false)
const preElement = ref<HTMLPreElement | null>(null)
let resetTimer: ReturnType<typeof window.setTimeout> | undefined

const fallbackCopy = (text: string) => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const success = document.execCommand('copy')
  textarea.remove()
  return success
}

const copy = async () => {
  const text = resolveCopyText(props.code, preElement.value?.textContent || '')
  if (!text) { return }

  const writeText = navigator.clipboard?.writeText
    ? (text: string) => navigator.clipboard.writeText(text)
    : undefined
  copied.value = await copyText(text, writeText, fallbackCopy)

  if (copied.value) {
    window.clearTimeout(resetTimer)
    resetTimer = window.setTimeout(() => {
      copied.value = false
    }, 1600)
  }
}

onBeforeUnmount(() => {
  window.clearTimeout(resetTimer)
})
</script>

<template>
  <div class="prose-pre">
    <div class="prose-pre__bar specimen-mono">
      <span>{{ filename || language || 'CODE' }}</span>
      <button
        type="button"
        :aria-label="copied ? '代码已复制' : '复制代码'"
        @click="copy"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <rect
            x="8"
            y="8"
            width="11"
            height="11"
          />
          <path d="M16 8V5H5v11h3" />
        </svg>
        {{ copied ? 'COPIED' : 'COPY' }}
      </button>
    </div>
    <pre ref="preElement"><slot /></pre>
  </div>
</template>

<style scoped>
.prose-pre {
  margin-block: 1.75rem;
  overflow: hidden;
  border: 1px solid var(--specimen-ink);
  background: var(--specimen-white);
}

.prose-pre__bar {
  display: flex;
  min-height: 3rem;
  align-items: center;
  justify-content: space-between;
  padding: .25rem .8rem;
  border-bottom: 1px solid var(--specimen-ink);
  background: var(--specimen-pink);
  font-size: .7rem;
  font-weight: 750;
}

.prose-pre button {
  display: inline-flex;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  gap: .45rem;
  padding: 0 .3rem;
  border: 0;
  background: transparent;
  font-size: .7rem;
  font-weight: 750;
}

.prose-pre button svg {
  width: 1rem;
  height: 1rem;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: miter;
  stroke-width: 1.5;
}

.prose-pre pre {
  max-width: 100%;
  padding: 1rem 1.2rem;
  margin: 0;
  overflow-x: auto;
  background: transparent !important;
  color: var(--specimen-ink);
  font-family: var(--specimen-mono);
  font-size: .84rem;
  line-height: 1.7;
  white-space: pre;
}

.prose-pre :deep(code) {
  display: block;
  min-width: max-content;
  background: transparent !important;
  font: inherit;
}
</style>
