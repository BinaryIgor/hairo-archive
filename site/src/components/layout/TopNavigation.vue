<template>
  <TopLandingNavigation v-if="displayTopLandingNavigation" />
  <TopPreAppNavigation v-else-if="displayTopPreAppNavigation" />
</template>

<script lang="ts">
import TopLandingNavigation from './pre-app/landing/TopLandingNavigation.vue';
import TopPreAppNavigation from './pre-app/TopPreAppNavigation.vue';
import { defineComponent } from "vue";
import { routes } from '../../app/routing';

export default defineComponent({
  components: {
    TopLandingNavigation,
    TopPreAppNavigation
  },

  data() {
    return {
      currentRouteName: '',
    }
  },

  watch: {
    $route(to, from) {
      this.currentRouteName = to.name;
    }
  },

  computed: {
    displayTopLandingNavigation(): boolean {
      return this.$route.name == routes.root.name;
    },

    displayTopPreAppNavigation(): boolean {
      return !this.$route.meta.needAuth && this.currentRouteName !== routes.root.name;
    }
  }
});
</script>
