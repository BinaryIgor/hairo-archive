<template>
  <div id="what-is-hairo" ref="what-is-hairo" class="what-is-hairo">
    <h1
      class="what-is-hairo__title"
      v-html="processTranslation($translations.preApp.landing.whatIsHairo.title)"
    ></h1>
    <div class="what-is-hairo__grid">
      <div
        ref="what-is-hairo__item--1"
        class="what-is-hairo__item what-is-hairo__item--1 box-shadow-1 rounded-4 hover-box-shadow-2"
      >
        <img v-if="starCollectorImage" class="what-is-hairo__img" :src="starCollectorImage" />
        <h3
          class="loading-fade-in what-is-hairo__img text-center p-8 flex items-center justify-center"
          v-else
        >{{ $translations.shared.loading }}</h3>
        <h2 class="what-is-hairo__header">{{ $translations.preApp.landing.whatIsHairo.item1Header }}</h2>
        <p class="what-is-hairo__text">{{ $translations.preApp.landing.whatIsHairo.item1Text }}</p>
      </div>

      <div
        ref="what-is-hairo__item--2"
        class="what-is-hairo__item what-is-hairo__item--2 box-shadow-1 rounded-4 hover-box-shadow-2"
      >
        <img v-if="criteriaImage" class="what-is-hairo__img" :src="criteriaImage" />
        <h3
          class="loading-fade-in what-is-hairo__img text-center p-8 flex items-center justify-center"
          v-else
        >{{ $translations.shared.loading }}</h3>
        <h2 class="what-is-hairo__header">{{ $translations.preApp.landing.whatIsHairo.item2Header }}</h2>
        <p class="what-is-hairo__text">{{ $translations.preApp.landing.whatIsHairo.item2Text }}</p>
      </div>

      <div
        ref="what-is-hairo__item--3"
        class="what-is-hairo__item what-is-hairo__item--3 box-shadow-1 rounded-4 hover-box-shadow-2"
      >
        <img v-if="sunBasketBallImage" class="what-is-hairo__img" :src="sunBasketBallImage" />
        <h3
          class="loading-fade-in what-is-hairo__img text-center p-8 flex items-center justify-center"
          v-else
        >{{ $translations.shared.loading }}</h3>
        <h2 class="what-is-hairo__header">{{ $translations.preApp.landing.whatIsHairo.item3Header }}</h2>
        <p class="what-is-hairo__text">{{ $translations.preApp.landing.whatIsHairo.item3Text }}</p>
      </div>

      <div
        ref="what-is-hairo__item--4"
        class="what-is-hairo__item what-is-hairo__item--4 box-shadow-1 rounded-4 hover-box-shadow-2"
      >
        <img v-if="robotBossImage" class="what-is-hairo__img" :src="robotBossImage" />
        <h3
          class="loading-fade-in what-is-hairo__img text-center p-8 flex items-center justify-center"
          v-else
        >{{ $translations.shared.loading }}</h3>
        <h2 class="what-is-hairo__header">{{ $translations.preApp.landing.whatIsHairo.item4Header }}</h2>
        <p class="what-is-hairo__text">{{ $translations.preApp.landing.whatIsHairo.item4Text }}</p>
      </div>

      <div
        ref="what-is-hairo__item--5"
        class="what-is-hairo__item what-is-hairo__item--5 box-shadow-1 rounded-4 hover-box-shadow-2"
      >
        <img v-if="spaceshipImage" class="what-is-hairo__img" :src="spaceshipImage" />
        <h3
          class="loading-fade-in what-is-hairo__img text-center p-8 flex items-center justify-center"
          v-else
        >{{ $translations.shared.loading }}</h3>
        <h2 class="what-is-hairo__header">{{ $translations.preApp.landing.whatIsHairo.item5Header }}</h2>
        <p class="what-is-hairo__text">{{ $translations.preApp.landing.whatIsHairo.item5Text }}</p>
      </div>

      <div
        ref="what-is-hairo__item--6"
        class="what-is-hairo__item what-is-hairo__item--6 box-shadow-1 rounded-4 hover-box-shadow-2"
      >
        <img v-if="automationImage" class="what-is-hairo__img" :src="automationImage" />
        <h3
          class="loading-fade-in what-is-hairo__img text-center p-8 flex items-center justify-center"
          v-else
        >{{ $translations.shared.loading }}</h3>
        <h2 class="what-is-hairo__header">{{ $translations.preApp.landing.whatIsHairo.item6Header }}</h2>
        <p class="what-is-hairo__text">{{ $translations.preApp.landing.whatIsHairo.item6Text }}</p>
      </div>
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
      automationImage: null as any,
      robotBossImage: null as any,
      spaceshipImage: null as any,
      starCollectorImage: null as any,
      sunBasketBallImage: null as any,
      criteriaImage: null as any,
    };
  },

  methods: {
    processTranslation(value: string): string {
      let tokensValues = [
        { prefix: '<span class="clr-primary-color font-hammersmith-one">', suffix: "</span>" },
      ];

      return replaceXAndYWith(value, '{{', '}}', tokensValues);
    },
  },

  mounted() {
    const ranges: Breakpoint[] = [
      Breakpoint.init({ className: 'what-is-hairo--xxs', fromWidth: 0, toWidth: 249 }),
      Breakpoint.init({ className: 'what-is-hairo--xs', fromWidth: 250, toWidth: 349 }),
      Breakpoint.init({ className: 'what-is-hairo--s', fromWidth: 350, toWidth: 599 }),
      Breakpoint.init({ className: 'what-is-hairo--m', fromWidth: 600, toWidth: 999 }),
      Breakpoint.init({ className: 'what-is-hairo--l', fromWidth: 1000, toWidth: 1249 }),
      Breakpoint.init({ className: 'what-is-hairo--xl', fromWidth: 1250, toWidth: 1749 }),
      Breakpoint.init({ className: 'what-is-hairo--xxl', fromWidth: 1750, toWidth: Infinity }),
    ];

    this.observer = applyBreakpoints(this.$refs["what-is-hairo"] as HTMLElement, ranges);

    this.intersectionObserver = new IntersectionObserver((entries) => {
      const offset = 200;

      entries.forEach(async entry => {
        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y && Array.from(entry.target.classList).includes('what-is-hairo__item--1')) {
          import('../../assets/images/landing/star-collector.png').then(image => {
            this.starCollectorImage = image.default;
          })
        }
        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y && Array.from(entry.target.classList).includes('what-is-hairo__item--2')) {
          import('../../assets/images/landing/criteria.png').then(image => {
            this.criteriaImage = image.default;
          })
        }
        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y && Array.from(entry.target.classList).includes('what-is-hairo__item--3')) {
          import('../../assets/images/landing/sun-basketball.png').then(image => {
            this.sunBasketBallImage = image.default;
          })
        }
        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y && Array.from(entry.target.classList).includes('what-is-hairo__item--4')) {
          import('../../assets/images/landing/robot-boss.png').then(image => {
            this.robotBossImage = image.default;
          })
        }
        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y && Array.from(entry.target.classList).includes('what-is-hairo__item--5')) {
          import('../../assets/images/landing/spaceship.png').then(image => {
            this.spaceshipImage = image.default;
          })
        }
        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y && Array.from(entry.target.classList).includes('what-is-hairo__item--6')) {
          import('../../assets/images/landing/automation.png').then(image => {
            this.automationImage = image.default;
          })
        }

        if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y) this.intersectionObserver?.unobserve(entry.target);
      })
    });

    let item1 = this.$refs['what-is-hairo__item--1'] as HTMLElement;
    let item2 = this.$refs['what-is-hairo__item--2'] as HTMLElement;
    let item3 = this.$refs['what-is-hairo__item--3'] as HTMLElement;
    let item4 = this.$refs['what-is-hairo__item--4'] as HTMLElement;
    let item5 = this.$refs['what-is-hairo__item--5'] as HTMLElement;
    let item6 = this.$refs['what-is-hairo__item--6'] as HTMLElement;
    this.intersectionObserver.observe(item1);
    this.intersectionObserver.observe(item2);
    this.intersectionObserver.observe(item3);
    this.intersectionObserver.observe(item4);
    this.intersectionObserver.observe(item5);
    this.intersectionObserver.observe(item6);
  },

  unmounted() {
    this.observer?.disconnect();
    this.intersectionObserver?.disconnect();
  },
});
</script>
<style scoped>
.what-is-hairo {
}

.what-is-hairo__title {
  text-align: center;
  font-size: 2.5rem;
  margin: 0 1rem 2rem 1rem;
}

.what-is-hairo__grid {
  display: grid;
  grid-gap: 30px;
  justify-content: center;
  grid-template-columns: repeat(3, 420px);
  grid-auto-rows: 700px;
}

.what-is-hairo__item {
  overflow: hidden;
  display: flex;
  flex-direction: column;
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

.what-is-hairo__img {
  object-fit: contain;
  height: 60%;
  width: 100%;
}

.what-is-hairo__header {
  font-size: 1.9rem;
  padding: 1rem 1.5rem 0 1.5rem;
  text-align: center;
}

.what-is-hairo__text {
  color: var(--clr-grayscale-2);
  padding: 1.5rem 1.4rem 2.5rem 1.4rem;
  text-align: center;
}

/* responsive */
.what-is-hairo--xxs .what-is-hairo__grid {
  margin: 0 2rem;
  grid-template-columns: repeat(1, minmax(200px, 250px));
  grid-auto-rows: 540px;
  font-size: 1rem;
}

.what-is-hairo--xs .what-is-hairo__text,
.what-is-hairo__header {
  padding-left: 1rem;
  padding-right: 1rem;
}

.what-is-hairo--xxs .what-is-hairo__title {
  font-size: 1.9rem;
}

.what-is-hairo--xxs .what-is-hairo__header {
  font-size: 1.6rem;
}

.what-is-hairo--xs .what-is-hairo__grid {
  margin: 0 2rem;
  grid-template-columns: repeat(1, minmax(220px, 300px));
  grid-auto-rows: 540px;
  font-size: 1rem;
}

.what-is-hairo--xs .what-is-hairo__title {
  font-size: 1.9rem;
}

.what-is-hairo--xs .what-is-hairo__header {
  font-size: 1.6rem;
}

.what-is-hairo--xs .what-is-hairo__text,
.what-is-hairo__header {
  padding-left: 1.1rem;
  padding-right: 1.1rem;
}

.what-is-hairo--s .what-is-hairo__grid {
  margin: 0 2rem;
  grid-template-columns: repeat(1, minmax(300px, 330px));
  grid-auto-rows: 540px;
  font-size: 1rem;
}

.what-is-hairo--s .what-is-hairo__text,
.what-is-hairo__header {
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}

.what-is-hairo--s .what-is-hairo__title {
  font-size: 2rem;
}

.what-is-hairo--s .what-is-hairo__header {
  font-size: 1.7rem;
}

.what-is-hairo--m .what-is-hairo__grid {
  margin: 0 2rem;
  grid-template-columns: repeat(2, minmax(275px, 310px));
  grid-gap: 30px;
  grid-auto-rows: 560px;
  font-size: 1.1rem;
}

.what-is-hairo--m .what-is-hairo__text,
.what-is-hairo__header {
  padding-left: 1rem;
  padding-right: 1rem;
}

.what-is-hairo--m .what-is-hairo__title {
  font-size: 2.1rem;
}

.what-is-hairo--m .what-is-hairo__header {
  font-size: 1.8rem;
}

.what-is-hairo--l .what-is-hairo__title {
  font-size: 2.3rem;
}

.what-is-hairo--l .what-is-hairo__header {
  font-size: 1.9rem;
}

.what-is-hairo--l .what-is-hairo__grid {
  margin: 0 2rem;
  grid-gap: 30px;
  grid-template-columns: repeat(2, minmax(340px, 410px));
  font-size: 1.1rem;
}

.what-is-hairo--xl .what-is-hairo__header {
  font-size: 1.9rem;
}

.what-is-hairo--xl .what-is-hairo__title {
  font-size: 2.4rem;
}

.what-is-hairo--xl .what-is-hairo__grid {
  margin: 0 2rem;
  grid-gap: 35px;
  grid-template-columns: repeat(3, minmax(340px, 360px));
  font-size: 1.1rem;
}

.what-is-hairo--xxl .what-is-hairo__text,
.what-is-hairo__header {
  padding-left: 1.9rem;
  padding-right: 1.9rem;
}

.what-is-hairo--xxl .what-is-hairo__title {
  font-size: 2.5rem;
}

.what-is-hairo--xxl .what-is-hairo__header {
  font-size: 2rem;
}

.what-is-hairo--xxl .what-is-hairo__grid {
  margin: 0 2rem;
  grid-gap: 30px;
  grid-template-columns: repeat(3, minmax(360px, 430px));
  font-size: 1.1rem;
}
</style>
