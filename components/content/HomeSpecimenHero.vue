<template>
  <section
    class="specimen-hero"
    aria-labelledby="home-title"
  >
    <div
      class="specimen-hero__blob"
      aria-hidden="true"
    />

    <div class="specimen-hero__copy">
      <h1 id="home-title">
        好奇心，<br>
        有自己的 <em>homepage.</em>
      </h1>
      <p class="specimen-mono">
        AI · HOMELAB · DEVOPS
      </p>
    </div>

    <SpecimenWindow
      title="NOW.TXT"
      class="specimen-hero__now"
    >
      正在研究如何让 AI 工具<br>真正融入日常工作流。
    </SpecimenWindow>

    <SpecimenWindow
      title="STATUS"
      tone="pink"
      class="specimen-hero__status"
    >
      BUILDING<br>
      DOCUMENTING<br>
      SHARING
    </SpecimenWindow>
  </section>
</template>

<style scoped>
.specimen-hero {
  position: relative;
  width: min(100% - 2.5rem, 90rem);
  min-height: 34rem;
  padding: clamp(4.5rem, 7vw, 6rem) 0 3rem;
  margin-inline: auto;
  overflow: hidden;
}

.specimen-hero__copy {
  position: relative;
  z-index: 3;
}

h1 {
  max-width: 11.5ch;
  margin: 0;
  font-size: clamp(4rem, 8.4vw, 7.5rem);
  font-weight: 790;
  letter-spacing: -.08em;
  line-height: .87;
}

h1 em {
  color: var(--specimen-ink);
  font-family: var(--specimen-serif);
  font-size: 1.02em;
  font-weight: 400;
  letter-spacing: -.055em;
}

.specimen-hero__copy p {
  margin: clamp(2rem, 4vw, 3.5rem) 0 0;
  font-size: clamp(.74rem, 1.2vw, .95rem);
  font-weight: 650;
}

.specimen-hero__blob {
  position: absolute;
  z-index: 1;
  top: clamp(3rem, 8vw, 6rem);
  right: -5rem;
  width: clamp(24rem, 48vw, 47rem);
  aspect-ratio: 1.85;
  border-radius: 58% 42% 62% 38% / 45% 55% 45% 55%;
  background: var(--specimen-lime);
  transform: rotate(-7deg);
  animation: blob-drift 12s ease-in-out infinite alternate;
}

.specimen-hero__now,
.specimen-hero__status {
  position: absolute;
  z-index: 4;
  width: clamp(13rem, 20vw, 18rem);
}

.specimen-hero__now {
  top: clamp(4.5rem, 8vw, 6.5rem);
  right: clamp(13rem, 22vw, 22rem);
  transform: rotate(-1deg);
  animation: window-float 6s ease-in-out infinite alternate;
}

.specimen-hero__status {
  right: clamp(1rem, 5vw, 5rem);
  bottom: clamp(4.5rem, 8vw, 7rem);
  transform: rotate(1deg);
  animation: window-float 7s 1.2s ease-in-out infinite alternate-reverse;
}

@keyframes blob-drift {
  to { transform: translate3d(1.25rem, -.75rem, 0) rotate(-4deg); }
}

@keyframes window-float {
  to { transform: translate3d(0, -.6rem, 0) rotate(.5deg); }
}

@media (max-width: 61.99rem) {
  .specimen-hero {
    min-height: 43rem;
  }

  .specimen-hero__blob {
    top: 18rem;
    right: -9rem;
  }

  .specimen-hero__now {
    top: 22rem;
    right: 8rem;
  }

  .specimen-hero__status {
    right: 1rem;
    bottom: 3rem;
  }
}

@media (max-width: 47.99rem) {
  .specimen-hero {
    width: min(100% - 2rem, 90rem);
    min-height: 42rem;
    padding-top: 4.25rem;
  }

  h1 {
    max-width: 8.5ch;
    font-size: clamp(3.65rem, 18vw, 5.1rem);
  }

  h1 em {
    display: block;
  }

  .specimen-hero__blob {
    top: 19rem;
    right: -10rem;
    width: 28rem;
  }

  .specimen-hero__now,
  .specimen-hero__status {
    width: 12rem;
  }

  .specimen-hero__now {
    top: 22.5rem;
    right: 5.5rem;
  }

  .specimen-hero__status {
    right: .5rem;
    bottom: 2.25rem;
  }
}
</style>
