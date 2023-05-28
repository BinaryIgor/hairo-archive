<template>
  <nav class="footer flex items-center justify-center width-100 text-center p-t-4 p-b-4">
    <a
      class="footer__item whitespace-nowrap font-hammersmith-one"
      @click="$router.push($routes.archive)"
    >{{ $translations.layout.preApp.footer.contact }}</a>
    <a
      class="footer__item whitespace-nowrap font-hammersmith-one"
      @click="$router.push($routes.archive)"
    >{{ $translations.layout.preApp.footer.termsOfService }}</a>
    <a
      class="footer__item whitespace-nowrap font-hammersmith-one"
      @click="$router.push($routes.archive)"
    >{{ $translations.layout.preApp.footer.privacyPolicy }}</a>
    <a
      class="footer__item font-hammersmith-one"
    >{{ processTranslation($translations.layout.preApp.footer.copyright) }}</a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  methods: {
    processTranslation(value: string): string {
      return value.replace("{{}}", new Date().getUTCFullYear().toString());
    },
  }
});
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--clr-grayscale-9);
}

.footer__item {
  margin-right: 1rem;
  margin-left: 1rem;
  color: var(--clr-grayscale-2);
}

/* responsive */
@media (max-width: 1000px) {
  .footer {
    flex-direction: column;
  }
}
</style>
