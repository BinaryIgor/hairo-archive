<template>
  <div ref="prolog" class="prolog">
    <div
      ref="prolog__slogan"
      class="prolog__slogan"
      :class="{ 'invisible': loadingFake || loadingVideo }"
    >
      <h1
        class="prolog__title"
        v-html="processTranslation($translations.preApp.landing.prolog.title)"
      ></h1>
      <p class="prolog__paragraph">{{ $translations.preApp.landing.prolog.paragraph }}</p>
    </div>
    <div class="prolog__video-wrapper">
      <video
        :class="{ 'invisible': loadingFake || loadingVideo }"
        @canplay="setVideoBgColorDelayed()"
        ref="prolog__video"
        class="prolog__video"
        :src="hairoAnimation"
        autoplay
        loop
        muted
        playsinline
      />
    </div>
    <div ref="prolog__under-gradient" class="prolog__under-gradient"></div>
    <div
      class="prolog__loader ling-fade-in-once text-center p-8 flex flex-col items-center justify-center"
      v-if="loadingFake || loadingVideo"
    >
      <span class="rotate w-12 h-12 inline-block" v-html="botIcon()"></span>
      <h3 class="m-t-4">{{ $translations.shared.loading }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import hairoAnimation from '../../assets/videos/hairo_animation.mp4'
import { replaceXAndYWith } from "../../core/shared/functions/functions";
import { applyBreakpoints, lockBodyUsingHeight, unlockBodyUsingHeight } from "../../core/shared/functions/ui-functions";
import { botIcon } from "../../core/shared/icons/icons";
import { Breakpoint } from "../../core/shared/model/types/breakpoint";

export default defineComponent({
  data() {
    return {
      loadingFake: true,
      loadingVideo: true,
      hairoAnimation: hairoAnimation,
      observer: null as null | ResizeObserver
    };
  },

  methods: {
    botIcon(): string {
      return botIcon();
    },

    processTranslation(value: string): string {
      let tokensValues = [
        { prefix: '<span class="clr-primary-color font-hammersmith-one">', suffix: "</span>" },
        { prefix: '<span class="clr-primary-color font-hammersmith-one">', suffix: "</span>" },
      ];

      return replaceXAndYWith(value, '{{', '}}', tokensValues);
    },

    isColorInRange(expectedColor: any, givenColor: any) {
      const THRESHOLD = 10;
      for (var i = 0; i < 3; i++) {
        if (((expectedColor[i] - THRESHOLD) > givenColor[i])
          || ((expectedColor[i] + THRESHOLD) < givenColor[i])) {
          return false;
        }
      }
      return true;
    },

    setVideoBgColor() {
      let vid = this.$refs['prolog__video'] as HTMLElement;
      let aboveGradient = this.$refs['prolog__slogan'] as HTMLElement;
      let underGradient = this.$refs['prolog__under-gradient'] as HTMLElement;
      if (vid) {
        let canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.drawImage(vid as CanvasImageSource, 0, 0, 1, 1);

        let rgba = ctx.getImageData(0, 0, 1, 1).data;
        let nativeColor: string | number[] = getComputedStyle(vid).getPropertyValue('--clr-grayscale-12-rgb').replace(/[^\d,]/g, '').split(',').map(el => parseInt(el));
        if (rgba.length > 2 && !aboveGradient.style.backgroundImage && this.isColorInRange(nativeColor, rgba)) {
          aboveGradient.style.backgroundImage = `linear-gradient(0deg, rgb(${rgba[0] + "," + rgba[1] + "," + rgba[2]}) 0%,${getComputedStyle(vid).getPropertyValue('--clr-grayscale-12')} 100%)`;
          underGradient.style.backgroundImage = `linear-gradient(180deg, rgb(${rgba[0] + "," + rgba[1] + "," + rgba[2]}) 0%, ${getComputedStyle(vid).getPropertyValue('--clr-grayscale-12')} 100%)`;
        }
      }
    },

    setVideoBgColorDelayed() {
      this.loadingVideo = false;
      setTimeout(this.setVideoBgColor, 50);
    }
  },

  mounted() {
    const ranges: Breakpoint[] = [
      Breakpoint.init({ className: 'prolog--xxs', fromWidth: 0, toWidth: 249 }),
      Breakpoint.init({ className: 'prolog--xs', fromWidth: 250, toWidth: 349 }),
      Breakpoint.init({ className: 'prolog--s', fromWidth: 350, toWidth: 599 }),
      Breakpoint.init({ className: 'prolog--s-short', fromWidth: 350, toWidth: 599, fromHeight: 0, toHeight: 249 }),
      Breakpoint.init({ className: 'prolog--s-avg', fromWidth: 350, toWidth: 599, fromHeight: 250, toHeight: 499 }),
      Breakpoint.init({ className: 'prolog--m', fromWidth: 600, toWidth: 999 }),
      Breakpoint.init({ className: 'prolog--m-short', fromWidth: 600, toWidth: 999, fromHeight: 0, toHeight: 249 }),
      Breakpoint.init({ className: 'prolog--m-avg', fromWidth: 600, toWidth: 999, fromHeight: 250, toHeight: 499 }),
      Breakpoint.init({ className: 'prolog--l', fromWidth: 1000, toWidth: 1249 }),
      Breakpoint.init({ className: 'prolog--xl', fromWidth: 1250, toWidth: 1749 }),
      Breakpoint.init({ className: 'prolog--xxl', fromWidth: 1750, toWidth: Infinity }),
    ];

    this.observer = applyBreakpoints(this.$refs["prolog"] as HTMLElement, ranges);
    lockBodyUsingHeight();

    setTimeout(() => {
      this.loadingFake = false;
      unlockBodyUsingHeight();
    }, 700);
  },

  unmounted() {
    this.observer?.disconnect();
  }
});
</script>
<style scoped>
.prolog {
  position: relative;
}

.prolog__slogan {
  transition: opacity 0.5s linear;
  opacity: 1;
  text-align: center;
  overflow: hidden;
  padding: 0rem 1rem 0 1rem;
}

.prolog__under-gradient {
  height: 100px;
  width: 100%;
}

.prolog__paragraph {
  font-size: 1rem;
  color: var(--clr-grayscale-1);
}

.prolog__video-wrapper {
  position: relative;
}

.prolog__loader {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.prolog__video {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.prolog__video-invisible {
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  transform: scale(0);
}

.rotate {
  animation: rotate 2s ease infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* responsive */
.prolog--xxs .prolog__title {
  font-size: 1.9rem;
}

.prolog--xxs .prolog__paragraph {
  font-size: 0.95rem;
}

.prolog--xxs .prolog__video-wrapper {
  width: 100%;
  height: calc(50vh);
}

.prolog--xs .prolog__slogan {
  padding-top: 1rem;
}

.prolog--xs .prolog__title {
  font-size: 1.9rem;
}

.prolog--xs .prolog__paragraph {
  font-size: 0.95rem;
}

.prolog--xs .prolog__video-wrapper {
  width: 100%;
  height: calc(53vh);
}

.prolog--s .prolog__slogan {
  padding: 2.1rem 1.9rem 0 1.9rem;
}

.prolog--s .prolog__title {
  font-size: 2rem;
}

.prolog--s .prolog__video-wrapper {
  width: 100%;
  height: calc(55vh);
}

.prolog--s-short .prolog__video-wrapper {
  width: 100%;
  height: 100%;
}

.prolog--s-avg .prolog__video-wrapper {
  width: 100%;
  height: 100%;
}

.prolog--m .prolog__video-wrapper {
  width: 100%;
  height: calc(72vh);
}

.prolog--m .prolog__title {
  font-size: 2.1rem;
}

.prolog--m .prolog__slogan {
  padding: 3.6rem 1.5rem 0 1.5rem;
}

.prolog--m-short .prolog__video-wrapper {
  width: 100%;
  height: 100%;
}

.prolog--m-avg .prolog__video-wrapper {
  width: 100%;
  height: 100%;
}

.prolog--l .prolog__slogan {
  padding: 2rem 1.5rem 0 1.5rem;
}

.prolog--l .prolog__title {
  font-size: 2.3rem;
}

.prolog--l .prolog__video-wrapper {
  width: 100%;
  height: calc(74vh);
}

.prolog--xl .prolog__slogan {
  padding: 0.6rem 1.5rem 0 1.5rem;
}

.prolog--xl .prolog__title {
  font-size: 2.4rem;
}

.prolog--xl .prolog__video-wrapper {
  width: 100%;
}

.prolog--xxl .prolog__title {
  font-size: 2.5rem;
}

.prolog--xxl .prolog__video-wrapper {
  width: 100%;
}
</style>
