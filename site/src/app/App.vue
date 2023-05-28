<template>
  <Modal />
  <TopNavigation />
  <RightNavigation />
  <RouterView></RouterView>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import TopNavigation from '../components/layout/TopNavigation.vue';
import RightNavigation from '../components/layout/RightNavigation.vue';
import Modal from '../components/shared/Modal.vue';

export default defineComponent({
  components: {
    Modal,
    TopNavigation,
    RightNavigation,
  },
});
</script>
