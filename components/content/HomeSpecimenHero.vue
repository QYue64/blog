<template>
  <section
    class="specimen-hero"
    aria-labelledby="home-title"
  >
    <div class="specimen-hero__copy">
      <h1 id="home-title">
        好奇心，<br>有自己的<br><em>homepage.</em>
      </h1>

      <p class="specimen-mono">
        AI · HOMELAB · DEVOPS <span aria-hidden="true" />
      </p>

      <div class="specimen-hero__actions">
        <NuxtLink
          class="specimen-hero__primary"
          to="/articles"
        >
          开始阅读
        </NuxtLink>
        <NuxtLink
          class="specimen-hero__secondary"
          to="/#about"
        >
          认识雀雀
        </NuxtLink>
      </div>
    </div>

    <figure class="specimen-hero__media">
      <img
        src="/images/anime/qyue-hero.webp"
        alt="月光下拿着笔记本、坐在家庭服务器旁的动漫角色"
        width="1122"
        height="1402"
      >
    </figure>

    <div
      class="specimen-hero__speed-lines"
      aria-hidden="true"
    />
  </section>
</template>

<style scoped>
.specimen-hero {
  position: relative;
  display: grid;
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--page-width));
  min-height: min(47rem, calc(100svh - 9rem));
  grid-template-columns: minmax(0, .92fr) minmax(28rem, 1.08fr);
  align-items: stretch;
  padding: clamp(3.25rem, 6vw, 6.5rem) 0 clamp(2.5rem, 5vw, 5rem);
  margin-inline: auto;
  overflow: hidden;
}

.specimen-hero__copy {
  position: relative;
  z-index: 3;
  align-self: start;
  padding-top: clamp(3rem, 6vw, 5.75rem);
}

h1 {
  max-width: 9.5ch;
  margin: 0;
  font-size: clamp(4.1rem, 7.2vw, 7.4rem);
  font-weight: 900;
  letter-spacing: -.085em;
  line-height: .9;
}

h1 em {
  color: var(--specimen-ink);
  font-family: var(--specimen-serif);
  font-size: .92em;
  font-weight: 400;
  letter-spacing: -.055em;
}

.specimen-hero__copy p {
  margin: clamp(2rem, 4vw, 3.5rem) 0 0;
  color: var(--specimen-violet);
  font-size: clamp(.78rem, 1.1vw, .95rem);
  font-weight: 800;
}

.specimen-hero__copy p span {
  display: inline-block;
  width: .17rem;
  height: 1.05em;
  margin-left: .45rem;
  background: currentColor;
  vertical-align: -.15em;
  animation: cursor-blink 1.1s steps(1) infinite;
}

.specimen-hero__actions {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 3rem);
  margin-top: clamp(2.25rem, 4vw, 3.75rem);
}

.specimen-hero__actions a {
  display: inline-flex;
  min-height: 3.6rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
}

.specimen-hero__primary {
  min-width: 12.5rem;
  padding: 0 2rem;
  border: 2px solid var(--specimen-ink);
  background: var(--specimen-violet);
  box-shadow: 6px 6px 0 var(--specimen-ink);
  clip-path: polygon(.7rem 0, calc(100% - .7rem) 0, 100% .7rem, 100% calc(100% - .7rem), calc(100% - .7rem) 100%, .7rem 100%, 0 calc(100% - .7rem), 0 .7rem);
  color: #fff;
  transition: box-shadow 180ms ease, transform 180ms ease;
}

.specimen-hero__primary:hover {
  box-shadow: 3px 3px 0 var(--specimen-ink);
  transform: translate(3px, 3px);
}

.specimen-hero__secondary {
  position: relative;
  color: var(--specimen-ink);
}

.specimen-hero__secondary::after {
  position: absolute;
  right: 0;
  bottom: .65rem;
  left: 0;
  height: 3px;
  background: var(--specimen-violet);
  content: '';
  transition: transform 180ms ease;
}

.specimen-hero__secondary:hover::after {
  transform: translateY(-.2rem);
}

.specimen-hero__media {
  position: relative;
  z-index: 1;
  align-self: stretch;
  min-height: 0;
  margin: 0 -2rem -5rem -5rem;
  overflow: hidden;
}

.specimen-hero__media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
  mask-image: linear-gradient(to right, transparent 0, #000 13%, #000 100%);
}

.specimen-hero__speed-lines {
  position: absolute;
  z-index: 0;
  top: 1rem;
  right: 39%;
  width: 13rem;
  height: 8rem;
  background: repeating-linear-gradient(25deg, transparent 0 13px, rgb(108 92 231 / 38%) 14px 15px, transparent 16px 25px);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  opacity: .8;
}

@keyframes cursor-blink {
  50% { opacity: 0; }
}

@media (max-width: 67rem) {
  .specimen-hero {
    min-height: 43rem;
    grid-template-columns: minmax(0, 1fr) minmax(24rem, .85fr);
  }

  h1 {
    font-size: clamp(3.8rem, 8.5vw, 6.2rem);
  }

  .specimen-hero__media {
    margin-left: -7rem;
  }
}

@media (max-width: 47.99rem) {
  .specimen-hero {
    width: calc(100% - 2rem);
    min-height: auto;
    grid-template-columns: 1fr;
    padding: 3.5rem 0 0;
    overflow: visible;
  }

  h1 {
    max-width: 8.8ch;
    font-size: clamp(3.45rem, 17vw, 5.2rem);
  }

  .specimen-hero__copy {
    padding-top: 0;
  }

  .specimen-hero__actions {
    gap: 1.35rem;
  }

  .specimen-hero__primary {
    min-width: 10rem;
    padding-inline: 1.4rem;
  }

  .specimen-hero__media {
    height: min(34rem, 133vw);
    margin: 1.75rem -1rem 0 -4rem;
  }

  .specimen-hero__media img {
    object-position: center 28%;
  }

  .specimen-hero__speed-lines {
    top: 46%;
    right: -1rem;
  }
}
</style>
