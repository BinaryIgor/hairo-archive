<template>
    <h3 v-if="loading" class="loader loading-fade-in">{{ $translations.shared.loading }}</h3>
    <div :class="[loading ? 'invisible' : 'visible']">
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
