<template>
  <div class="button-container-wrapper" :style="{ height, width }">
    <button class="button" :class="{ [`button--${variant}`]: variant }" :disabled="disabled || loading">
      <div class="button-content-wrapper">
        <div v-if="leftIcon" class="button-icon-container">
          <!-- <img src="@/assets/Icons/mountLists.svg" alt="Ícone" class="button-icon" /> -->
        </div>

        <span v-if="!loading" class="button-label-content" :class="{ [`button-label-content--${variant}`]: variant }">
          <slot name="label"> {{ label }} </slot>
        </span>

        <div v-if="rightIcon" class="button-icon-container">
          <!-- <img src="@/assets/Icons/mountLists.svg" alt="Ícone" class="button-icon" /> -->
        </div>

        <!-- <div v-if="loading">
          <q-circular-progress indeterminate size="20px" color="yellow-12" />
        </div> -->
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    disabled: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: false },
    leftIcon: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    rightIcon: { type: Boolean, default: false },
    height: { type: String, default: '42px' },
    label: { type: String, default: '', required: true },
    variant: { type: String as PropType<'primary' | 'secondary'>, default: 'primary' },
    width: { type: String, default: 'fit-content' },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 100%;
  outline: none;
  width: 100%;
}

.button.button--primary {
  background-color: var(--primary-color);
  color: #fff;
}

.button.button--secondary:focus,
.button.button--secondary:hover,
.button.button--primary:focus,
.button.button--primary:hover {
  filter: brightness(110%);
  transition: filter 0.2s ease-in-out;
}

.button.button--secondary {
  background-color: #fff;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}

.button-content-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
}

.button-icon-container {
  align-items: center;
  display: flex;
  height: 1.715em;
  justify-content: center;
  margin: 0 0.715em;
  width: 1.715em;
}

.button-icon-container:first-child {
  margin-left: 0;
}

.button-icon-container:last-child {
  margin-right: 0;
}

.button-icon {
  display: inline-block;
  height: 100%;
  width: 100%;
}

.button-label-content {
  font-size: 1.286em;
}

.button-label-content.button-label-content--primary {
  font-weight: bold;
}
</style>
