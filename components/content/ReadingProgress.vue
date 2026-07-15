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
  height: 4px;
  background: rgb(118 86 239 / 15%);
}

.reading-progress span {
  display: block;
  height: 100%;
  background: var(--specimen-violet);
  transition: width 120ms linear;
}
</style>
