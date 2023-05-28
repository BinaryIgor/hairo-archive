<template>
  <span @click="playHairo" class="audio__btn cursor-pointer inline-block" v-html="audioIcon()"></span>

  <Prolog />
  <WhatIsHairo class="item" />
  <Features class="item" />
  <How class="item" />
  <Epilog class="item" />
  <Footer class="item" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Prolog from "./Prolog.vue";
import Epilog from "./Epilog.vue";
import WhatIsHairo from "./WhatIsHairo.vue";
import Features from "./Features.vue";
import How from "./How.vue";
import Footer from "../layout/pre-app/Footer.vue"
import { volumeOffIcon, volumeOnIcon } from "../../core/shared/icons/icons";

export default defineComponent({
  components: {
    Prolog,
    WhatIsHairo,
    Features,
    How,
    Epilog,
    Footer
  },

  data() {
    return {
      voiceOff: true,
      hairoAudio: null as any
    }
  },

  methods: {
    audioIcon() {
      if (this.voiceOff) {
        return this.volumeOffIcon();
      } else {
        return this.volumeOnIcon();
      }
    },

    volumeOffIcon() {
      return volumeOffIcon({ pathClass: 'clr-primary-lighter-0-fill' });
    },

    volumeOnIcon() {
      return volumeOnIcon({ pathClass: 'clr-primary-lighter-0-fill' });
    },

    async playHairo() {
      if (!this.hairoAudio) {
        this.hairoAudio = new Audio('../../../hairo.mp3');
        this.hairoAudio.addEventListener('ended', () => {
          this.voiceOff = true;
        })
      }
      if (this.hairoAudio.paused) {
        this.hairoAudio.play();
        this.voiceOff = false;
      } else {
        if (this.hairoAudio.currentTime != 0) {
          this.hairoAudio.pause();
          this.hairoAudio.currentTime = 0
          this.voiceOff = true;
        } else {
          this.hairoAudio.currentTime = 0
          this.voiceOff = true;
        }
      }
    },
  },
});
</script>
<style scoped>
.item {
  margin-top: 120px;
}

.audio__btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: var(--z-index-hairo-audio);
  width: 2rem;
  height: 2rem;
}

/* responsive */
@media (min-width: 1000px) {
  .audio__btn {
    width: 2.25rem;
    height: 2.25rem;
  }
}
</style>
