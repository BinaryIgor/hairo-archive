<template>
  <nav class="top-pre-app-navigation bg-transparent" ref="top-pre-app-navigation">
    <a @click="$router.push($routes.root)" class="top-pre-app-navigation__item m-l-2">
      <span class="w-10 h-10 inline-block" v-html="logoIcon()"></span>
      <h2 class="top-pre-app-navigation__hairo m-l-2">
        <span class="clr-primary-color font-hammersmith-one">Hai</span>ro
      </h2>
    </a>
    <div class="flex">
      <a @click="showNav()" class="top-pre-app-navigation__item m-r-2">
        <h3
          class="top-pre-app-navigation__join m-r-2"
        >{{ $translations.layout.preApp.topLandingNavigation.join }}</h3>
        <span class="w-8 h-8 h-max-8 inline-block" v-html="menuIcon()"></span>
      </a>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { eventBus } from "../../../core/shared/events/event-bus";
import { ShowRightLandingNavigationEvent } from '../../../core/shared/events/model/models/events/show-right-landing-navigation-event';
import { Subscriber } from "../../../core/shared/events/model/types/subscriber";
import { applyBreakpoints } from "../../../core/shared/functions/ui-functions";
import { logoIcon, menuIcon } from "../../../core/shared/icons/icons";
import { Breakpoint } from "../../../core/shared/model/types/breakpoint";

export default defineComponent({
  data() {
    return {
      observer: null as null | ResizeObserver,
    }
  },
  methods: {
    logoIcon(): string {
      return logoIcon();
    },

    menuIcon(): string {
      return menuIcon();
    },

    showNav(): void {
      eventBus.emit(new ShowRightLandingNavigationEvent(), [Subscriber.RIGHT_PRE_APP_NAVIGATION]);
    },

    scrollUp(): void {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    },
  },

  mounted() {
    const ranges: Breakpoint[] = [
      Breakpoint.init({ className: 'top-pre-app-navigation--s', fromWidth: 0, toWidth: 999 }),
      Breakpoint.init({ className: 'top-pre-app-navigation--l', fromWidth: 1000, toWidth: Infinity }),
    ];

    this.observer = applyBreakpoints(this.$refs["top-pre-app-navigation"] as HTMLElement, ranges);
  },

  unmounted() {
    this.observer?.disconnect();
  }
});
</script>
<style scoped>
.top-pre-app-navigation {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--top-landing-navigation-height);
  padding: 0.5rem;
  width: 100%;
  z-index: var(--z-index-top-navigation);
}

.top-pre-app-navigation__item {
  align-items: center;
  display: flex;
}

.top-pre-app-navigation__join {
  font-size: 1.3rem;
}

.top-pre-app-navigation__hairo {
  font-size: 1.4rem;
}
/* responsive */

.top-pre-app-navigation--s .top-pre-app-navigation__join {
  font-size: 1.2rem;
}

.top-pre-app-navigation--s .top-pre-app-navigation__hairo {
  font-size: 1.2rem;
}
</style>
