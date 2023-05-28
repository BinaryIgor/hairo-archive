<template>
  <RightPreAppNavigation v-if="displayRightPreAppNavigation" />
</template>

<script lang="ts">
import RightPreAppNavigation from './pre-app/RightPreAppNavigation.vue';
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    RightPreAppNavigation
  },

  data() {
    return {
      currentRouteName: '',
    }
  },

  watch: {
    $route(to, from) { // need to observe route change
      this.currentRouteName = to.name;
    }
  },

  computed: {
    displayRightPreAppNavigation(): boolean {
      return !this.$route.meta.needAuth;
    }
  }
});
</script>

<style scoped>
</style>
