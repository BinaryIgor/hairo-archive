<template>
  <h1 class="not-found">{{$translations.shared.notFound.message}}</h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
})
</script>
<style scoped>
.not-found {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
