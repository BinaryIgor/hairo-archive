<template>
  <div
    class="narrow-landing-navigation-wrapper"
    ref="narrow-landing-navigation-wrapper"
    v-bind:class="{ active: show }"
    @click="closeMenu()"
  >
    <nav ref="narrow-landing-navigation" class="narrow-landing-navigation">
      <div class="narrow-landing-navigation__line"></div>
      <a
        class="narrow-landing-navigation__item"
        @click="$router.push($routes.archive)"
      >{{ $translations.layout.preApp.narrowLandingNavigation.signUp }}</a>
      <a
        class="narrow-landing-navigation__item"
        @click="$router.push($routes.archive)"
      >{{ $translations.layout.preApp.narrowLandingNavigation.signIn }}</a>
      <a class="narrow-landing-navigation__item">
        <span @click="close" class="cursor-pointer w-10 h-10 inline-block" v-html="closeIcon()"></span>
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { EventType } from "../../../../core/shared/events/model/types/events";
import { LandingIds } from '../../../../core/shared/model/types/landing-ids';
import { eventBus } from "../../../../core/shared/events/event-bus";
import { Subscriber } from "../../../../core/shared/events/model/types/subscriber";
import { lockBodyScroll, unlockBodyScroll } from "../../../../core/shared/functions/ui-functions";
import { closeIcon, logoIcon } from "../../../../core/shared/icons/icons";

export default defineComponent({
  data() {
    return {
      landingIds: LandingIds,
      show: false,
    };
  },

  methods: {
    closeMenu(): void {
      this.show = false;
      unlockBodyScroll();
    },

    logoIcon(): string {
      return logoIcon();
    },

    closeIcon(): string {
      return closeIcon();
    },

    scrollTo(id?: string): void {
      if (id) {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },

  mounted() {
    eventBus.on(EventType.SHOW_NARROW_LANDING_NAVIGATION, Subscriber.NARROW_LANDING_NAVIGATION, () => {
      this.show = true;
      lockBodyScroll();
      (this.$refs["narrow-landing-navigation"] as HTMLElement).scrollTop = (this.$refs["narrow-landing-navigation"] as HTMLElement).scrollHeight;
    })
  },

  unmounted() {
    unlockBodyScroll();
    eventBus.remove(EventType.SHOW_NARROW_LANDING_NAVIGATION, Subscriber.NARROW_LANDING_NAVIGATION);
  }
});
</script>

<style scoped>
.narrow-landing-navigation-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: var(--z-index-narrow-landing-navigation);
  background-color: var(--clr-grayscale-12);
  visibility: hidden;
  transform: translateY(100vh);
  transition: transform 400ms ease-in-out, visibility 400ms linear;
}

.narrow-landing-navigation-wrapper.active {
  transform: translateY(0);
  visibility: visible;
}

.narrow-landing-navigation {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  font-size: 1.25rem;
}

.narrow-landing-navigation__item {
  text-align: center;
  font-family: "Hammersmith One", sans-serif;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
}

.narrow-landing-navigation__line {
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  min-height: 1px;
  background: linear-gradient(
    90deg,
    var(--clr-grayscale-12) 0%,
    var(--clr-primary) 50%,
    var(--clr-grayscale-12) 100%
  );
}
</style>
