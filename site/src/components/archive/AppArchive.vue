<template>
    <div
        class="app-archive m-t-20 m-b-10 documents-scope break-word white-space-prewrap w-clamp-min-95-700 p-7 rounded-4 box-shadow-1-11 border-1-sol-clr-grayscale-10 clr-grayscale-11-background-color m-x-auto"
    >Hairo archive.</div>
    <Footer />
</template>
<script lang="ts">import { defineComponent } from "@vue/runtime-core";
import Footer from '../layout/pre-app/Footer.vue';

export default defineComponent({
    components: {
        Footer
    }
})
</script>
<style scoped>
.app-archive {
    min-height: calc(
        calc(var(--vh, 1vh) * 100) - var(--bottom-app-navigation-height)
    );
}
</style>