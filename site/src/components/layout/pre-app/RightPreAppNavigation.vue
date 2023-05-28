<template>
  <nav
    ref="right-pre-app-navigation"
    class="right-pre-app-navigation box-shadow-2 page-linear-gradient"
    v-bind:class="{ hide: hideNav }"
    tabindex="0"
    @blur="close()"
  >
    <div class="right-pre-app-navigation__upper-part">
      <a
        class="right-pre-app-navigation__item cursor-pointer m-b-6"
        @click="goTo($routes.archive.path)"
      >{{ $translations.layout.preApp.rightPreAppNavigation.signUp }}</a>
      <a
        class="right-pre-app-navigation__item cursor-pointer m-b-6"
        @click="goTo($routes.archive.path)"
      >{{ $translations.layout.preApp.rightPreAppNavigation.signIn }}</a>
    </div>

    <div class="right-pre-app-navigation__lower-part">
      <a
        class="right-pre-app-navigation__item cursor-pointer m-b-1"
        @click="goTo($routes.archive.path)"
      >{{ $translations.layout.preApp.rightPreAppNavigation.contact }}</a>
      <a
        class="right-pre-app-navigation__item cursor-pointer m-b-1"
        @click="goTo($routes.archive.path)"
      >{{ $translations.layout.preApp.rightPreAppNavigation.termsOfService }}</a>

      <a
        class="right-pre-app-navigation__item cursor-pointer m-b-1"
        @click="goTo($routes.archive.path)"
      >{{ $translations.layout.preApp.rightPreAppNavigation.privacyPolicy }}</a>

      <a
        class="right-pre-app-navigation__item cursor-pointer"
      >{{ processTranslation($translations.layout.preApp.rightPreAppNavigation.copyright) }}</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { eventBus } from "../../../core/shared/events/event-bus";
import { EventType } from "../../../core/shared/events/model/types/events";
import { Subscriber } from "../../../core/shared/events/model/types/subscriber";
import { closeIcon } from "../../../core/shared/icons/icons";

export default defineComponent({
  data() {
    return {
      hideNav: true,
    };
  },

  methods: {
    processTranslation(value: string): string {
      return value.replace("{{}}", new Date().getUTCFullYear().toString());
    },

    goTo(route: string) {
      this.$router.push(route);
      this.close();
    },

    closeIcon() {
      return closeIcon();
    },

    close() {
      this.hideNav = true;
    },

    show() {
      this.hideNav = false;
      (this.$refs['right-pre-app-navigation'] as HTMLElement)?.focus();
    },
  },

  unmounted() {
    eventBus.remove(EventType.SHOW_RIGHT_LANDING_NAVIGATION, Subscriber.RIGHT_PRE_APP_NAVIGATION);
  },

  created() {
    eventBus.on(EventType.SHOW_RIGHT_LANDING_NAVIGATION, Subscriber.RIGHT_PRE_APP_NAVIGATION, () => {
      this.show();
    });
  },
});
</script>

<style scoped>
.right-pre-app-navigation {
  max-width: 250px;
  overflow-x: hidden;
  border-top-left-radius: 4rem;
  z-index: var(--z-index-right-navigation);
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.4s ease-in-out;
  outline-style: none;
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
  padding: 3rem 1.5rem 1rem 2.5rem;
}

.right-pre-app-navigation__upper-part {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
}

.right-pre-app-navigation__lower-part {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
}

.right-pre-app-navigation__lower-part .right-pre-app-navigation__item {
  font-size: 1rem;
  color: var(--clr-grayscale-2);
}

.right-pre-app-navigation__item {
  font-size: 1.1rem;
  font-family: "Hammersmith One", sans-serif;
}

.hide {
  transform: translateX(105%);
}
</style>
