<script setup lang="ts">
import { calculateReadingProgress } from '../../utils/articles'

const progress = ref(0)

const updateProgress = () => {
  const root = document.documentElement
  progress.value = calculateReadingProgress(
    root.scrollTop,
    root.scrollHeight,
    root.clientHeight
  )
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div
    class="reading-progress"
    aria-hidden="true"
  >
    <span :style="{ width: `${progress}%` }" />
  </div>
</template>

<style scoped>
.reading-progress {
  position: fixed;
  z-index: 100;
  inset: 0 0 auto;
  height: 3px;
  background: rgb(108 92 231 / 12%);
}

.reading-progress span {
  position: relative;
  display: block;
  height: 100%;
  background: var(--specimen-violet);
  box-shadow: 0 1px 8px rgb(108 92 231 / 42%);
  transition: width 120ms linear;
}

.reading-progress span::after {
  position: absolute;
  top: 0;
  right: 0;
  width: .8rem;
  height: 100%;
  background: var(--specimen-pink);
  content: '';
}
</style>
