<template>
  <div class="epilog" ref="epilog">
    <div class="epilog__box">
      <div class="epilog__content">
        <h1 class="epilog__header">{{ $translations.preApp.landing.epilog.header }}</h1>
        <p class="epilog__paragraph">{{ $translations.preApp.landing.epilog.paragraph }}</p>
      </div>
      <button
        @click="$router.push($routes.archive)"
        class="epilog__button btn box-shadow-2 hover-box-shadow-3"
      >{{ $translations.preApp.landing.epilog.button }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import armchair from "../../assets/images/landing/armchairs.png";
import { applyBreakpoints } from "../../core/shared/functions/ui-functions";
import { Breakpoint } from "../../core/shared/model/types/breakpoint";

export default defineComponent({
  data() {
    return {
      observer: null as null | ResizeObserver,
      armchair: armchair
    };
  },

  mounted() {
    const ranges: Breakpoint[] = [
      Breakpoint.init({ className: 'epilog--xxs', fromWidth: 0, toWidth: 249 }),
      Breakpoint.init({ className: 'epilog--xs', fromWidth: 250, toWidth: 349 }),
      Breakpoint.init({ className: 'epilog--s', fromWidth: 350, toWidth: 599 }),
      Breakpoint.init({ className: 'epilog--m', fromWidth: 600, toWidth: 999 }),
      Breakpoint.init({ className: 'epilog--l', fromWidth: 1000, toWidth: 1249 }),
      Breakpoint.init({ className: 'epilog--xl', fromWidth: 1250, toWidth: 1749 }),
      Breakpoint.init({ className: 'epilog--xxl', fromWidth: 1750, toWidth: Infinity }),
    ];

    this.observer = applyBreakpoints(this.$refs['epilog'] as HTMLElement, ranges);
  },

  unmounted() {
    this.observer?.disconnect();
  }
});
</script>
<style scoped>
.epilog__box {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: clamp(10px, 90%, max-content);
}

.epilog__header {
  font-size: 1.6rem;
}

.epilog__paragraph {
  color: var(--clr-grayscale-2);
  font-size: 1rem;
}

.epilog__button {
  font-size: 1rem;
  font-family: "Hammersmith One", sans-serif;
  min-width: 120px;
}

/* responsive */
.epilog--xxs .epilog__box {
  width: 200px;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.epilog--xxs .epilog__header {
  font-size: 1.6rem;
}

.epilog--xxs .epilog__paragraph {
  font-size: 1rem;
}

.epilog--xxs .epilog__button {
  margin-top: 1rem;
  width: 100px;
}

.epilog--xs .epilog__box {
  width: 240px;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.epilog--xs .epilog__header {
  font-size: 1.6rem;
}

.epilog--xs .epilog__paragraph {
  font-size: 1rem;
}

.epilog--xs .epilog__button {
  margin-top: 1rem;
  width: 100px;
}

.epilog--s .epilog__box {
  width: 320px;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.epilog--s .epilog__header {
  font-size: 1.6rem;
}

.epilog--s .epilog__paragraph {
  font-size: 1rem;
}

.epilog--s .epilog__button {
  margin-top: 1rem;
  width: 110px;
}

.epilog--m .epilog__box {
  width: 320px;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.epilog--m .epilog__header {
  font-size: 1.6rem;
}

.epilog--m .epilog__content {
  margin: 1.6rem;
}

.epilog--l .epilog__header {
  font-size: 1.6rem;
}

.epilog--l .epilog__content {
  margin: 1.6rem;
}

.epilog--xl .epilog__header {
  font-size: 1.6rem;
}

.epilog--xl .epilog__content {
  margin: 1.6rem;
}

.epilog--xxl .epilog__content {
  margin: 1.6rem;
}
</style>
