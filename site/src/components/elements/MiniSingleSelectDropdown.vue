<template>
  <div
    ref="single-select-dropdown"
    class="single-select-dropdown"
    id="single-select-dropdown"
    :tabindex="0"
    @blur="closeIfOutside($event)"
  >
    <div class="single-select-dropdown__selection" :class="[selectionClasses]" @click="toggle()">
      <div
        v-if="(!search && !selectedItem) || (search && !open && !selectedItem)"
        class="single-select-dropdown__placeholder"
      >{{ selectPlaceholder || $translations.shared.singleSelectDropdown.select }}</div>
      <div v-if="selectedItem" class="single-select-dropdown__selected">{{ selectedItem }}</div>

      <div
        v-if="search"
        @click.stop
        class="single-select-dropdown__search"
        :class="{ hidden: !open }"
      >
        <input
          :class="dropdownInputClasses"
          autocomplete="off"
          @blur="closeIfOutside($event)"
          id="single-select-dropdown__input"
          ref="single-select-dropdown__input"
          class="single-select-dropdown__input"
          type="text"
          :placeholder="$translations.shared.singleSelectDropdown.search"
          :value="searchInput"
          @input="onInput($event)"
        />
      </div>

      <div class="single-select-dropdown__arrow"></div>
    </div>

    <div
      class="single-select-dropdown__items-wrapper"
      :class="[{ hidden: !open }, dropdownBackgroundClasses]"
    >
      <div class="single-select-dropdown__items">
        <div
          v-for="item in searchItems"
          class="single-select-dropdown__item"
          @click="select(item)"
        >{{ item }}</div>
        <div
          class="single-select-dropdown__empty"
          v-if="!searchItems.length"
        >{{ $translations.shared.singleSelectDropdown.empty }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { closeIcon } from "../../core/shared/icons/icons";

const SELECT_EVENT = "select-event";

export default defineComponent({
  emit: [SELECT_EVENT],

  props: {
    search: {
      required: false,
      default: false
    },

    eagerSelect: {
      required: false,
      default: false
    },

    selectPlaceholder: {
      required: false,
      default: ''
    },

    items: {
      type: Object as () => string[],
      required: true,
    },

    selectedInitially: {
      required: false,
      default: ''
    },

    dropdownInputClasses: {
      required: false,
      default: 'bg-transparent'
    },

    dropdownBackgroundClasses: {
      required: false,
      default: 'clr-app-background-background-color box-shadow-2'
    },

    selectionClasses: {
      required: false,
      default: 'bg-transparent box-shadow-1-inner'
    },
  },

  data() {
    return {
      open: false,
      searchInput: '',
      selectedItem: this.selectedInitially,
    };
  },

  computed: {
    searchItems(): string[] {
      return this.items.filter(i => i.toLowerCase().includes(this.searchInput.toLowerCase()));
    }
  },

  methods: {
    select(item: string) {
      let previous = this.selectedItem;
      this.selectedItem = item;
      this.searchInput = '';
      this.open = false;
      this.$emit(SELECT_EVENT, {
        selected: this.selectedItem,
        previous: previous
      });
    },

    selectWithoutEmit(item: string) {
      this.selectedItem = item;
      this.searchInput = '';
      this.open = false;
    },

    onInput(e: any) {
      this.searchInput = e.target.value;
    },

    closeIcon() {
      return closeIcon({ pathClass: 'clr-grayscale-4-fill' });
    },

    toggle() {
      this.open = !this.open;
      if (this.open && this.search) {
        this.$nextTick(() => (this.$refs['single-select-dropdown__input'] as HTMLElement).focus());
      }
      this.searchInput = '';
    },

    closeIfOutside(e: any) {
      if (e.relatedTarget && (e.relatedTarget.id === 'single-select-dropdown' || e.relatedTarget.id === 'single-select-dropdown__input')) return;
      this.open = false;
    },
  },

  mounted() {
    if (this.eagerSelect) {
      this.$emit(SELECT_EVENT, this.selectedItem);
    }
  }
});
</script>
<style scoped>
.single-select-dropdown {
  cursor: pointer;
  position: relative;
}

.single-select-dropdown__selection {
  text-align: left;

  user-select: none;
  position: relative;
  padding: 0.6rem;

  padding-right: 1.9rem;
  border-radius: 1rem;
}

.single-select-dropdown__placeholder {
  text-align: left;
  margin: 0.2rem;
  padding: 0.3rem;
}

.single-select-dropdown__search {
  margin: 0.2rem;
  padding: 0.3rem;
}

.single-select-dropdown__input {
  width: 100%;
}

.single-select-dropdown__selected {
  margin: 0.2rem;
  padding: 0.3rem;
}

.single-select-dropdown__arrow {
  top: 1.6rem;
  right: 0.7rem;
  position: absolute;
  width: 0;
  height: 0;
  border-left: 0.4rem solid transparent;
  border-right: 0.4rem solid transparent;
  border-top: 0.4rem solid var(--clr-grayscale-3);
  transition: border-top-color 300ms linear;
}

.single-select-dropdown__selection:hover .single-select-dropdown__arrow {
  border-top-color: var(--clr-primary);
}

.single-select-dropdown__items-wrapper {
  max-height: 200px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  overflow: auto;
  top: calc(100% + 10px);
  border-radius: 1rem;
}

.single-select-dropdown__items {
  color: var(--clr-text);
  overflow: hidden;
  position: relative;
  background-color: transparent;
  border-radius: 1rem;
}

.single-select-dropdown__item {
  text-align: left;

  position: relative;
  margin-top: 5px;
  user-select: none;
  padding: 1rem;
}

.single-select-dropdown__item:hover {
  color: var(--clr-primary);
}

.single-select-dropdown__empty {
  margin-top: 5px;
  padding: 1rem;
}
</style>