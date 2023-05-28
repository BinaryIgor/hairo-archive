<template>
  <div id="how" class="how" ref="how">
    <div class="how__line"></div>
    <h1 class="how__title" v-html="processTranslation($translations.preApp.landing.how.title)"></h1>
    <div
      ref="how__item--1"
      class="how__item how__item--1 box-shadow-1 hover-box-shadow-2 rounded-4"
    >
      <div class="how__text">
        <h1
          class="how__header cursor-pointer inline-block"
          @click="$router.push($routes.archive)"
          v-html="processTranslation($translations.preApp.landing.how.step1Header)"
        ></h1>
        <p class="how__paragraph">{{ $translations.preApp.landing.how.step1Text }}</p>
      </div>
      <img v-if="handIsChoosing" :src="handIsChoosing" class="how__image" />
      <h3
        class="loading-fade-in how__image text-center p-8 flex items-center justify-center"
        v-else
      >{{ $translations.shared.loading }}</h3>
    </div>
    <div
      ref="how__item--2"
      class="how__item how__item--2 box-shadow-1 hover-box-shadow-2 rounded-4"
    >
      <img v-if="enterThePortal" :src="enterThePortal" class="how__image" />
      <h3
        class="loading-fade-in how__image text-center p-8 flex items-center justify-center"
        v-else
      >{{ $translations.shared.loading }}</h3>
      <div class="how__text">
        <h1
          class="how__header"
          v-html="processTranslation($translations.preApp.landing.how.step2Header)"
        ></h1>
        <p class="how__paragraph">{{ $translations.preApp.landing.how.step2Text }}</p>
      </div>
    </div>
    <div
      ref="how__item--3"
      class="how__item how__item--3 box-shadow-1 hover-box-shadow-2 rounded-4"
    >
      <div class="how__text">
        <h1
          class="how__header"
          v-html="processTranslation($translations.preApp.landing.how.step3Header)"
        ></h1>
        <p class="how__paragraph">{{ $translations.preApp.landing.how.step3Text }}</p>
      </div>
      <img v-if="helloGuysImage" :src="helloGuysImage" class="how__image" />
      <h3
        class="loading-fade-in how__image text-center p-8 flex items-center justify-center"
        v-else
      >{{ $translations.shared.loading }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { replaceXAndYWith } from "../../core/shared/functions/functions";
import { applyBreakpoints } from "../../core/shared/functions/ui-functions";
import { Breakpoint } from "../../core/shared/model/types/breakpoint";

export default defineComponent({
  data() {
    return {
      observer: null as null | ResizeObserver,
      intersectionObserver: null as null | IntersectionObserver,
      helloGuysImage: null as any,
      handIsChoosing: null as any,
      enterThePortal: null as any
    };
  },

  methods: {
    processTranslation(value: string): string {
      let tokensValues = [
        { prefix: '<span class="clr-primary-color font-hammersmith-one">', suffix: "</span>" },
        { prefix: '<span class="clr-primary-color font-hammersmith-one">', suffix: "</span>" },
      ];

      return replaceXAndYWith(value, '{{', '}}', tokensValues);
    },
  },

  mounted() {
    const ranges: Breakpoint[] = [
      Breakpoint.init({ className: 'how--xxs', fromWidth: 0, toWidth: 249 }),
      Breakpoint.init({ className: 'how--xs', fromWidth: 250, toWidth: 349 }),
      Breakpoint.init({ className: 'how--s', fromWidth: 350, toWidth: 599 }),
      Breakpoint.init({ className: 'how--m', fromWidth: 600, toWidth: 999 }),
      Breakpoint.init({ className: 'how--l', fromWidth: 1000, toWidth: 1249 }),
      Breakpoint.init({ className: 'how--xl', fromWidth: 1250, toWidth: 1749 }),
      Breakpoint.init({ className: 'how--xxl', fromWidth: 1750, toWidth: Infinity }),
    ];

    this.observer = applyBreakpoints(this.$refs['how'] as HTMLElement, ranges);


    this.intersectionObserver = new IntersectionObserver((entries) => {
      const offset = 200;

      entries.forEach(async entry => {
        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y && Array.from(entry.target.classList).includes('how__item--1')) {
          import('../../assets/images/landing/hand-is-choosing.png').then(image => {
            this.handIsChoosing = image.default;
          })
        }

        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y && Array.from(entry.target.classList).includes('how__item--2')) {
          import('../../assets/images/landing/enter-the-portal.png').then(image => {
            this.enterThePortal = image.default;
          })
        }

        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y && Array.from(entry.target.classList).includes('how__item--3')) {
          import('../../assets/images/landing/hello-guys.png').then(image => {
            this.helloGuysImage = image.default;
          })
        }

        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y) this.intersectionObserver?.unobserve(entry.target);
      })
    });

    let item1 = this.$refs['how__item--1'] as HTMLElement;
    let item2 = this.$refs['how__item--2'] as HTMLElement;
    let item3 = this.$refs['how__item--3'] as HTMLElement;
    this.intersectionObserver.observe(item1);
    this.intersectionObserver.observe(item2);
    this.intersectionObserver.observe(item3);
  },

  unmounted() {
    this.observer?.disconnect();
    this.intersectionObserver?.disconnect();
  }
});
</script>

<style scoped>
.how {
  position: relative;
}

.how > * {
  margin-bottom: 100px;
}

.how__title {
  text-align: center;
  font-size: 2.5rem;
  margin: 0 1rem 3rem 1rem;
}

.how__item {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(
    0deg,
    hsl(
        var(--grayscale-hue),
        var(--grayscale-saturation),
        var(--grayscale-lightness-12)
      )
      0%,
    hsl(
        var(--grayscale-hue),
        var(--grayscale-saturation),
        calc(var(--grayscale-lightness-12) + 0%)
      )
      30%,
    hsl(
        var(--grayscale-hue),
        var(--grayscale-saturation),
        calc(var(--grayscale-lightness-12) + 1%)
      )
      100%
  );
}

.how__text {
  padding: 4rem;
  width: 50%;
}

.how__image {
  width: 50%;
  object-fit: contain;
}

.how__header {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.how__header-highlight {
  color: var(--clr-primary);
  font-family: "Hammersmith One", sans-serif;
}

.how__paragraph {
  font-size: 1.1rem;
  color: var(--clr-grayscale-2);
}

.how--xs .how__line {
  width: 2px;
}

/* responsive */
.how--xxs .how__title {
  font-size: 1.9rem;
}

.how--xxs .how__item {
  width: 90%;
  flex-direction: column-reverse;
  text-align: center;
}

.how--xxs .how__item--2 {
  flex-direction: column;
}

.how--xxs .how__image {
  width: 100%;
}

.how--xxs .how__text {
  padding: 1.2rem;
  width: 100%;
}

.how--xxs .how__header {
  font-size: 1.6rem;
}

.how--xxs .how__paragraph {
  font-size: 1rem;
}

.how--xs .how__title {
  font-size: 1.9rem;
}

.how--xs .how__item {
  width: 90%;
  flex-direction: column-reverse;
  text-align: center;
}

.how--xs .how__item--2 {
  flex-direction: column;
}

.how--xs .how__image {
  width: 100%;
}

.how--xs .how__text {
  width: 100%;
  padding: 1.2rem;
  padding-bottom: 2rem;
}

.how--xs .how__header {
  font-size: 1.6rem;
}

.how--xs .how__paragraph {
  font-size: 1rem;
}

.how--s .how__title {
  font-size: 2rem;
}

.how--s .how__line {
  width: 2px;
}

.how--s .how__item {
  width: 85%;
  flex-direction: column-reverse;
  text-align: center;
}

.how--s .how__item--2 {
  flex-direction: column;
}

.how--s .how__image {
  width: 100%;
}

.how--s .how__header {
  font-size: 1.7rem;
}

.how--s .how__paragraph {
  font-size: 1rem;
}

.how--s .how__text {
  width: 100%;
  padding: 1.9rem;
  padding-bottom: 2.2rem;
}

.how--m .how__title {
  font-size: 2.1rem;
}

.how--m .how__line {
  width: 3px;
}

.how--m .how__item {
  width: 500px;
  flex-direction: column-reverse;
  text-align: center;
}

.how--m .how__item--2 {
  flex-direction: column;
}

.how--m .how__image {
  width: 100%;
}

.how--m .how__header {
  font-size: 1.8rem;
}

.how--m .how__text {
  width: 100%;
  padding: 2.5rem;
  padding-bottom: 3rem;
}

.how--l .how__title {
  font-size: 2.3rem;
}

.how--l .how__item {
  width: 850px;
}

.how--l .how__image {
  width: 50%;
  height: 360px;
}

.how--l .how__header {
  font-size: 1.9rem;
}

.how--l .how__text {
  padding: 3rem;
}

.how--xl .how__title {
  font-size: 2.4rem;
}

.how--xl .how__item {
  width: 1150px;
}

.how--xl .how__item--3 .how__image {
  width: 55%;
}

.how--xl .how__image {
  width: 50%;
  height: 450px;
}

.how--xl .how__header {
  font-size: 1.9rem;
}

.how--xl .how__text {
  padding: 3rem;
}

.how--xxl .how__title {
  font-size: 2.5rem;
}

.how--xxl .how__item {
  width: 1350px;
}

.how--xxl .how__item--3 .how__image {
  width: 56%;
}

.how--xxl .how__image {
  width: 50%;
  height: 450px;
}

.how--xxl .how__header {
  font-size: 2rem;
}

.how--xxl .how__text {
  padding: 4rem;
}
</style>
