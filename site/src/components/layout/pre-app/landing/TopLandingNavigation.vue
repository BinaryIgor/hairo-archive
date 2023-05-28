<template>
  <nav class="top-landing-navigation" ref="top-landing-navigation">
    <a @click="scrollUp()" class="top-landing-navigation__item top-landing-navigation__item--first">
      <span class="top-landing-navigation__logo" v-html="logoIcon()"></span>
      <h2 class="top-landing-navigation__hairo">
        <span class="clr-primary-color font-hammersmith-one">Hai</span>ro
      </h2>
    </a>
    <div class="flex">
      <MiniSingleSelectDropdown
        v-if="selectedLanguage"
        ref="mini-single-select-dropdown"
        class="slot-modal--app-language m-r-3"
        @selectEvent="onAppLanguageSelect($event)"
        :items="translatedAppLanguages"
        :search="false"
        :selectedInitially="selectedLanguage"
        selectionClasses
        dropdownBackgroundClasses="clr-grayscale-11-background-color box-shadow-2-11"
      />
      <a @click="showNav()" class="flex items-center m-r-2">
        <h3
          class="top-landing-navigation__join"
        >{{ $translations.layout.preApp.topLandingNavigation.join }}</h3>
        <span class="top-landing-navigation__menu" v-html="menuIcon()"></span>
      </a>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { eventBus } from "../../../../core/shared/events/event-bus";
import { ShowRightLandingNavigationEvent } from '../../../../core/shared/events/model/models/events/show-right-landing-navigation-event';
import { Subscriber } from "../../../../core/shared/events/model/types/subscriber";
import MiniSingleSelectDropdown from "../../../elements/MiniSingleSelectDropdown.vue";
import { dataLocalStorage, uiLangStore } from "../../../../app/source";
import { DataStorageKey } from "../../../../core/shared/model/types/data-storage-key";
import { logoIcon, menuIcon } from "../../../../core/shared/icons/icons";
import { keyByValue } from "../../../../core/shared/functions/functions";
import { Breakpoint } from "../../../../core/shared/model/types/breakpoint";
import { applyBreakpoints } from "../../../../core/shared/functions/ui-functions";
import { UILanguage, UILanguageWithLanguage } from "../../../../core/shared/model/types/ui-language";

export default defineComponent({
  components: {
    MiniSingleSelectDropdown,
  },

  data() {
    return {
      menuIcon: menuIcon,
      observer: null as null | ResizeObserver,
      selectedLanguage: UILanguageWithLanguage[uiLangStore.get()],
    }
  },

  computed: {
    translatedAppLanguages(): string[] {
      const values = Object.values(UILanguage);
      let languages = []
      for (let value of values) {
        languages.push(UILanguageWithLanguage[value])
      }

      return languages;
    }
  },

  methods: {
    onAppLanguageSelect(selected: { selected: string, previous: string }) {
      let chosenLang: UILanguage = keyByValue(UILanguageWithLanguage, selected.selected);
      let langFromStore: UILanguage = uiLangStore.get();
      if (chosenLang == langFromStore || !chosenLang) return;

      dataLocalStorage.save<UILanguage>(DataStorageKey.PRE_APPLICATION_LANGUAGE, chosenLang);
      window.location.reload();
    },

    logoIcon(): string {
      return logoIcon();
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
      Breakpoint.init({ className: 'top-landing-navigation--s', fromWidth: 0, toWidth: 999 }),
      Breakpoint.init({ className: 'top-landing-navigation--l', fromWidth: 1000, toWidth: Infinity }),
    ];

    this.observer = applyBreakpoints(this.$refs["top-landing-navigation"] as HTMLElement, ranges);
  },

  unmounted() {
    this.observer?.disconnect();
  }
});
</script>
<style scoped>
.top-landing-navigation {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--top-landing-navigation-height);
  padding: 0.5rem;
  width: 100%;
  z-index: var(--z-index-top-navigation);
}

.top-landing-navigation__item--first {
  align-items: center;
  display: flex;
  margin-left: 0.5rem;
}

.top-landing-navigation__logo {
  width: 2.5rem;
  max-width: 2.5rem;
  height: 2.5rem;
  display: inline-block;
}

.top-app-navigation__download {
  width: 2rem;
  height: 2rem;
  max-height: 2rem;
  max-width: 2rem;
  min-height: 2rem;
  min-width: 2rem;
}

.top-landing-navigation__hairo {
  margin-left: 0.5rem;
  font-size: 1.4rem;
}

.top-landing-navigation__item--second {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}

.top-landing-navigation__join {
  margin-right: 0.5rem;
  font-size: 1.3rem;
}

.top-landing-navigation__menu {
  width: 2rem;
  height: 2rem;
  display: inline-block;
}

/* responsive */
.top-landing-navigation--s .top-landing-navigation__join {
  font-size: 1.2rem;
}

.top-landing-navigation--s .top-landing-navigation__hairo {
  font-size: 1.2rem;
}

.top-landing-navigation.top-landing-navigation--s {
  background-color: var(--clr-grayscale-12);
  border-bottom: 1px solid var(--clr-grayscale-10);
}
</style>
