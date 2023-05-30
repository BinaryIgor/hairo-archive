<template>
    <div
        v-if="display"
        class="fixed w-full h-full top-0 left-0 flex justify-center items-center z-[10000] bg-slate-900 bg-opacity-80"
    >
        <div class="absolute left-5 top-5 flex gap-6">
            <button @click="zoomIn">Zoom In</button>
            <button @click="zoomOut">Zoom Out</button>
        </div>

        <div class="absolute right-5 top-5 flex gap-6">
            <button @click="display = false">Close</button>
        </div>
        <div class="w-[1000px] h-[600px] overflow-auto">
            <div class="w-full h-auto" ref="image">
                <img
                    class="object-cover aspect-square w-full h-full"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                    alt
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            display: false,
        }
    },

    methods: {
        zoomIn() {
            const width = (this.$refs['image'] as HTMLElement).style.width;
            if (width) {
                (this.$refs['image'] as HTMLElement).style.width = parseInt(width) + 10 + '%';
            } else {
                (this.$refs['image'] as HTMLElement).style.width = '110%';
            }
        },

        zoomOut() {
            const width = (this.$refs['image'] as HTMLElement).style.width;
            if (parseInt(width) <= 100) return;
            if (width) {
                (this.$refs['image'] as HTMLElement).style.width = parseInt(width) - 10 + '%';
            }
        },
    }
})
</script>