<template>
  <div ref="features-wrapper">
    <div
      ref="features"
      class="features"
      :id="featuresId"
      @mousedown="onDown($event)"
      @mousemove="onMove($event)"
    >
      <div class="features__left-arrow" @click="previous()"></div>
      <div class="features__right-arrow" @click="next()"></div>
      <div ref="features__slider" class="features__slider">
        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item1Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item1Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item2Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item2Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item3Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item3Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item4Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item4Text }}</p>
        </div>

        <!-- <div class="features__item box-shadow-1 select-none  ">
          <h2 class="features__title">{{$translations.preApp.landing.features.item5Title}}</h2>
          <p class="features__text">{{$translations.preApp.landing.features.item5Text}}</p>
        </div>-->

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item6Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item6Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item7Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item7Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item8Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item8Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item9Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item9Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item10Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item10Text }}</p>
        </div>

        <!-- duplicate for infinite effect -->

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item1Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item1Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item2Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item2Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item3Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item3Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item4Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item4Text }}</p>
        </div>

        <!-- <div class="features__item box-shadow-1 select-none  ">
          <h2 class="features__title">{{$translations.preApp.landing.features.item5Title}}</h2>
          <p class="features__text">{{$translations.preApp.landing.features.item5Text}}</p>
        </div>-->

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item6Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item6Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item7Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item7Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item8Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item8Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item9Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item9Text }}</p>
        </div>

        <div class="features__item box-shadow-1 select-none">
          <h2 class="features__title">{{ $translations.preApp.landing.features.item10Title }}</h2>
          <p class="features__text">{{ $translations.preApp.landing.features.item10Text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import englishWithBobImage from '../../assets/images/landing/robot-boss.png';
import lexFridmanImage from '../../assets/images/landing/hello-guys.png';
import webDevSimplifiedImage from '../../assets/images/landing/sun-basketball.png';
import kimJungGiImage from '../../assets/images/landing/robot-boss.png';
import { Breakpoint } from '../../core/shared/model/types/breakpoint';
import { applyBreakpoints } from '../../core/shared/functions/ui-functions';

const SLIDER_INTERVAL = 3000;
const SLIDER_TRANSITION = `1800ms transform cubic-bezier(0.52, 0.01, 0.43, 0.99)`;
const SLIDER_CLICK_TRANSITION = `none`;

enum SlideDirection {
  LEFT,
  RIGHT
}

export default defineComponent({
  data() {
    return {
      featuresId: 'features',
      observer: null as null | ResizeObserver,
      horizontalScroll: true,
      englishWithBobImage: englishWithBobImage,
      lexFridmanImage: lexFridmanImage,
      webDevSimplifiedImage: webDevSimplifiedImage,
      kimJungGiImage: kimJungGiImage,
      intervalId: null as null | NodeJS.Timeout,
      pressed: false,
      startX: 0,
      x: 0
    };
  },

  methods: {
    next(): void {
      this.clearSliderInterval();
      this.slide(SlideDirection.LEFT, SLIDER_CLICK_TRANSITION);
      this.runSliderInterval();
    },

    previous(): void {
      this.clearSliderInterval();
      this.slide(SlideDirection.RIGHT, SLIDER_CLICK_TRANSITION);
      this.runSliderInterval();
    },

    onVisibilityChange(): void {
      if (document.hidden) {
        this.clearSliderInterval();
      } else {
        this.runSliderInterval();
      }
    },

    onUp(): void {
      this.pressed = false;
      this.runSliderInterval();
    },

    onDown(e: any): void {
      this.pressed = true;
      const offsetX = e.offsetX;
      let featuresSlider = this.$refs['features__slider'] as HTMLElement;
      const transformStyle = window.getComputedStyle(featuresSlider).getPropertyValue('transform');
      const translateX = transformStyle.replace("matrix(", "").replace(")", "").replaceAll(/\s/g, "").trim().split(",").map(Number)[4] || 0;

      this.startX = offsetX - translateX;
      featuresSlider.style.transform = `translateX(${offsetX - this.startX}px)`;
      this.clearSliderInterval();
    },

    onMove(e: any): void {
      if (!this.pressed) return;
      e.preventDefault();

      const offsetX = e.offsetX;
      const features = this.$refs['features'] as HTMLElement
      const featuresSlider = this.$refs['features__slider'] as HTMLElement

      features.style.cursor = 'grabbing';
      featuresSlider.style.transition = `none`;
      this.x = offsetX;
      featuresSlider.style.transform = `translateX(${this.x - this.startX}px)`;

      let outer = features.getBoundingClientRect();
      let inner = featuresSlider.getBoundingClientRect();
      const transformStyle = window.getComputedStyle(featuresSlider).getPropertyValue('transform');
      const translateX = transformStyle.replace("matrix(", "").replace(")", "").replaceAll(/\s/g, "").trim().split(",").map(Number)[4] || 0;
      if (translateX > 0) {
        featuresSlider.style.transform = `translateX(-${inner.width / 2 - (this.x - this.startX)}px)`;
      } else if (inner.right < outer.right) {
        const viewableWidth = outer.width;
        const slideBy = inner.width / 2 - viewableWidth;
        featuresSlider.style.transform = `translateX(-${slideBy - (inner.right - outer.right)}px)`;
      }
    },

    slide(direction: SlideDirection, transition?: string): void {
      let featuresRect = (this.$refs['features'] as HTMLElement).getBoundingClientRect();
      let featuresSliderRect = (this.$refs['features__slider'] as HTMLElement).getBoundingClientRect();
      let featuresSlider = this.$refs['features__slider'] as HTMLElement;
      const itemWidth = featuresSliderRect.width / featuresSlider.children.length;
      const transformStyle = window.getComputedStyle(featuresSlider).getPropertyValue('transform');
      const translateX = transformStyle.replace("matrix(", "").replace(")", "").replaceAll(/\s/g, "").trim().split(",").map(Number)[4] || 0;

      if (direction === SlideDirection.RIGHT) {
        if (Math.ceil(featuresSliderRect.left) >= Math.ceil(featuresRect.left)) { // end of slider
          featuresSlider.style.transition = `none`;
          const slideBy = featuresSliderRect.width / 2;
          featuresSlider.style.transform = `translateX(${-(slideBy + (featuresRect.left - featuresSliderRect.left))}px)`;
          this.slide(direction, transition);

          return;
        }
      } else {
        if (Math.ceil(featuresSliderRect.right) <= Math.ceil(featuresRect.right)) { // end of slider
          featuresSlider.style.transition = `none`;
          const viewableWidth = featuresRect.width;
          const slideBy = featuresSliderRect.width / 2 - viewableWidth;
          featuresSlider.style.transform = `translateX(${-(slideBy - (featuresSliderRect.right - featuresRect.right))}px)`;
          this.slide(direction, transition);

          return;
        }
      }

      featuresSlider.style.transition = transition || SLIDER_TRANSITION;
      let slideBy = 0;
      if (direction === SlideDirection.RIGHT) {
        slideBy = translateX + ((Math.ceil(featuresRect.left) - Math.ceil(featuresSliderRect.left)) % itemWidth || itemWidth);
      } else {
        slideBy = translateX - ((Math.ceil(featuresSliderRect.right) - Math.ceil(featuresRect.right)) % itemWidth || itemWidth);
      }
      featuresSlider.style.transform = `translateX(${slideBy}px)`;
    },

    runSliderInterval(): void {
      if (this.intervalId) return;
      this.intervalId = setInterval(() => {

        this.slide(SlideDirection.LEFT, SLIDER_TRANSITION);
      }, SLIDER_INTERVAL);
    },

    clearSliderInterval(): void {
      clearInterval(this.intervalId as NodeJS.Timeout);
      this.intervalId = null;
    }
  },

  mounted() {
    const ranges: Breakpoint[] = [
      Breakpoint.init({ className: 'features--xxs', fromWidth: 0, toWidth: 249 }),
      Breakpoint.init({ className: 'features--xs', fromWidth: 250, toWidth: 349 }),
      Breakpoint.init({ className: 'features--s', fromWidth: 350, toWidth: 599 }),
      Breakpoint.init({ className: 'features--m', fromWidth: 600, toWidth: 999 }),
      Breakpoint.init({ className: 'features--l', fromWidth: 1000, toWidth: 1249 }),
      Breakpoint.init({ className: 'features--xl', fromWidth: 1250, toWidth: 1749 }),
      Breakpoint.init({ className: 'features--xxl', fromWidth: 1750, toWidth: Infinity }),
    ];

    this.observer = applyBreakpoints(this.$refs['features-wrapper'] as HTMLElement, ranges);
    document.addEventListener("visibilitychange", this.onVisibilityChange);
    window.addEventListener("mouseup", this.onUp);
    this.runSliderInterval();
  },

  unmounted() {
    window.removeEventListener('mouseup', this.onUp);
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    this.clearSliderInterval();
    this.observer?.disconnect();
  },
});
</script>

<style scoped>
.features {
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  width: 360px; /* viewable width of slider */
  --itemWidth: 360px;
  --itemsCount: 18;
}

.features__slider {
  position: relative;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(var(--itemsCount), var(--itemWidth));
  width: calc(var(--itemsCount) * var(--itemWidth));
  grid-template-rows: 300px;
  pointer-events: none;
}

.features__left-arrow {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%) rotateZ(45deg);
  width: 25px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0);
  border: 5px solid var(--clr-primary);
  z-index: var(--z-index-features-arrows);
  cursor: pointer;
}

.features__right-arrow {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%) rotateZ(45deg);
  width: 25px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0);
  border: 5px solid var(--clr-primary);
  z-index: var(--z-index-features-arrows);
  cursor: pointer;
}

.features__header {
  text-align: center;
  font-size: 2.5rem;
  margin: 0 1rem 2rem 1rem;
}

.features__item {
  overflow: hidden;
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 20px;
  height: 240px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.features__title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.features__text {
  font-size: 1.1rem;
  color: var(--clr-grayscale-2);
}

.features__img {
  object-fit: contain;
  height: 70%;
  width: 100%;
}

/* responsive */
.features--xxs .features__title {
  font-size: 1.2rem;
}

.features--xxs .features__text {
  font-size: 1rem;
}

.features--xxs .features {
  width: 200px;
  --itemWidth: 200px;
}

.features--xs .features__title {
  font-size: 1.2rem;
}

.features--xs .features__text {
  font-size: 1rem;
}

.features--xs .features__item {
  height: 270px;
}

.features--xs .features {
  width: 250px;
  --itemWidth: 250px;
}

.features--s .features__title {
  font-size: 1.4rem;
}

.features--s .features__text {
  font-size: 1rem;
}

.features--s .features {
  width: 330px;
  --itemWidth: 330px;
}

.features--m .features__title {
  font-size: 1.4rem;
}

.features--m .features {
  width: 590px;
  --itemWidth: 295px;
}

.features--l .features {
  width: 850px;
  --itemWidth: 425px;
}

.features--xl .features {
  width: 1200px;
  --itemWidth: 400px;
}

.features--xxl .features {
  width: 1380px;
  --itemWidth: 460px;
}
</style>
