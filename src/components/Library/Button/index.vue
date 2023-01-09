<template>
  <div class="button-container-wrapper" :style="{ height, width }">
    <button class="button" :class="{ [`button--${variant}`]: variant }" :disabled="disabled || loading">
      <div class="button-content-wrapper">
        <div v-if="leftIcon" class="button-icon-container">
          <img src="@/assets/Icons/mountLists.svg" alt="Ícone" class="button-icon" />
        </div>

        <span v-if="!loading" class="button-label-content" :class="{ [`button--${variant}`]: variant }">{{ label }}</span>

        <div v-if="rightIcon" class="button-icon-container">
          <img src="@/assets/Icons/mountLists.svg" alt="Ícone" class="button-icon" />
        </div>

        <div v-if="loading">
          <q-circular-progress indeterminate size="20px" color="yellow-12" />
        </div>
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
    width: { type: String, default: '160px' },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.button {
  border: none;
  border-radius: 60px;
  cursor: pointer;
  height: 100%;
  outline: none;
  width: 100%;
}

.button.button--primary {
  background-color: var(--pink-color);
  color: #fff;
}

.button.button--secondary {
  background-color: #fff;
  border: 1px solid var(--pink-color);
  color: var(--pink-color);
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

.button-label-content.button--primary {
  font-weight: bold;
}
</style>
