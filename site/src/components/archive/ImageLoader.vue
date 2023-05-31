<template>
    <h3 v-if="loading" class="loader loading-fade-in">{{ $translations.shared.loading }}</h3>
    <div :class="[loading ? 'invisible w-0 h-0 m-0 p-0 scale-0' : 'visible']">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            loading: false
        };
    },
    methods: {
        setLoading(loading: boolean) {
            this.loading = loading;
        }
    },
})
</script>
