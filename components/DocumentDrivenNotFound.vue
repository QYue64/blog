<template>
  <section
    class="not-found"
    aria-labelledby="not-found-title"
  >
    <div
      class="not-found__blob"
      aria-hidden="true"
    />

    <div class="not-found__copy">
      <p class="specimen-mono">
        QYUE://404
      </p>
      <h1 id="not-found-title">
        这条记录不存在。
      </h1>
      <NuxtLink to="/">
        返回首页 →
      </NuxtLink>
    </div>

    <SpecimenWindow
      title="NOT_FOUND"
      tone="pink"
      class="not-found__window"
    >
      STATUS / MISSING<br>
      PATH / UNKNOWN<br>
      ACTION / RETURN_HOME
    </SpecimenWindow>
  </section>
</template>

<style scoped>
.not-found {
  position: relative;
  display: grid;
  width: min(100% - 2.5rem, 90rem);
  min-height: 65vh;
  grid-template-columns: minmax(0, 1fr) clamp(14rem, 24vw, 20rem);
  gap: clamp(3rem, 10vw, 10rem);
  align-items: center;
  padding: clamp(4rem, 10vw, 9rem) 0;
  margin-inline: auto;
  overflow: hidden;
}

.not-found__copy,
.not-found__window {
  position: relative;
  z-index: 2;
}

.not-found__copy p {
  margin: 0 0 1rem;
  color: var(--specimen-violet);
  font-size: .78rem;
  font-weight: 800;
}

.not-found h1 {
  max-width: 9ch;
  margin: 0;
  font-size: clamp(4rem, 9vw, 8rem);
  letter-spacing: -.075em;
  line-height: .9;
}

.not-found__copy a {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  margin-top: 2rem;
  color: var(--specimen-violet);
  font-family: var(--specimen-mono);
  font-size: .78rem;
  font-weight: 750;
  text-underline-offset: .3rem;
}

.not-found__blob {
  position: absolute;
  z-index: 1;
  top: 16%;
  left: 28%;
  width: clamp(18rem, 42vw, 38rem);
  aspect-ratio: 1.8;
  background: var(--specimen-lime);
  clip-path: polygon(4% 32%, 35% 2%, 88% 12%, 100% 64%, 64% 100%, 10% 84%);
  transform: rotate(-4deg);
}

.not-found__window {
  transform: rotate(1deg);
}

@media (max-width: 47.99rem) {
  .not-found {
    width: min(100% - 2rem, 90rem);
    min-height: 70vh;
    grid-template-columns: 1fr;
    gap: 3.5rem;
    padding: 4rem 0 6rem;
  }

  .not-found h1 {
    font-size: clamp(4rem, 20vw, 5.5rem);
  }

  .not-found__blob {
    top: 10rem;
    left: -7rem;
    width: 24rem;
  }

  .not-found__window {
    width: min(16rem, calc(100% - 2rem));
    justify-self: end;
  }
}
</style>
