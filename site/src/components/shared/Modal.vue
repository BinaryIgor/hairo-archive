<template>
  <div ref="modal" class="modal" v-if="show && modalGuts">
    <div class="modal__content m-x-4 rounded-4 border-1-sol-clr-grayscale-10">
      <h2 class="modal__title" v-bind:class="colorClass">{{ modalGuts.title }}</h2>
      <div class="modal__texts">
        <p v-bind:class="colorClass" class="modal__text" v-for="t in modalGuts.texts">{{ t }}</p>
      </div>
      <button
        class="btn m-x-auto block w-min-20"
        v-bind:class="backgroundColorClass"
        v-on:click="ok"
      >{{ $translations.shared.ok }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { eventBus } from "../../core/shared/events/event-bus";
import { EventType } from "../../core/shared/events/model/types/events";
import { Subscriber } from "../../core/shared/events/model/types/subscriber";
import { lockBodyScroll, unlockBodyScroll } from "../../core/shared/functions/ui-functions";
import { ModalGuts } from "../../core/shared/model/models/modal-guts";

export default defineComponent({
  data() {
    return {
      show: false,
      modalGuts: null as ModalGuts | null,
    };
  },

  computed: {
    colorClass(): string {
      if (this.modalGuts?.errors) {
        return 'clr-error-color';
      }
      if (this.modalGuts?.success) {
        return 'clr-success-color';
      }
      return 'clr-primary-color';
    },

    backgroundColorClass(): string {
      if (this.modalGuts?.errors) {
        return 'clr-error-background-color';
      }
      if (this.modalGuts?.success) {
        return 'clr-success-background-color';
      }
      return 'clr-primary-background-color';
    },
  },

  methods: {
    hide() {
      unlockBodyScroll();
      this.modalGuts = null;
      this.show = false;
    },

    ok() {
      this.modalGuts?.tasks.forEach((task) => {
        task();
      });
      this.hide();
    },
  },

  created() {
    eventBus.on(EventType.SHOW_MODAL, Subscriber.MODAL, (modalGuts) => {
      lockBodyScroll();
      this.modalGuts = modalGuts;
      this.show = true;
    });
  },

  unmounted() {
    unlockBodyScroll();
    eventBus.remove(EventType.SHOW_MODAL, Subscriber.MODAL);
  }
});
</script>
<style scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--z-index-modal-mask);
  background-color: var(--clr-modal-mask);
}

.modal__content {
  min-width: 300px;
  padding: 2rem 1.8rem 1.2rem 1.8rem;
  background-color: var(--clr-modal-content);
  max-height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
}

.modal__title {
  text-align: center;
  font-size: 1.5rem;
}

.modal__texts {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.modal__text {
  text-align: center;
  font-size: 1rem;
  margin-bottom: 1rem;
}

/* responsive */
@media (min-width: 1000px) {
  .modal__content {
    min-width: 400px;
    max-width: 650px;
    padding: 2rem 4rem 1.2rem 4rem;
  }

  .modal__title {
    font-size: 1.7rem;
  }

  .modal__text {
    font-size: 1.1rem;
  }
}
</style>
