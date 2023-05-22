<template>
  <div class="button-container-wrapper" :style="{ height, width: fullWidth ? '100%' : width }">
    <button ref="buttonRef" class="button" :class="{ [`button--${variant}`]: variant }" :disabled="disabled || loading" @click="handleButtonClickEffect">
      <div class="button-content-wrapper">
        <div v-if="leftIcon" class="button-icon-container">
          <slot name="left-icon"></slot>
        </div>

        <span v-if="!loading" class="button-label-content" :class="{ [`button-label-content--${variant}`]: variant }">
          <slot name="label"> {{ label }} </slot>
        </span>

        <div v-if="rightIcon" class="button-icon-container">
          <slot name="right-icon"></slot>
        </div>

        <div v-if="loading">
          <span class="loader"></span>
        </div>

        <span v-show="clicked" ref="spanRippleRef" class="button-ripple"></span>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

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
    const buttonRef = ref<HTMLButtonElement | null>(null)
    const spanRippleRef = ref<HTMLSpanElement | null>(null)
    const clicked = ref(false)

    const handleButtonClickEffect = (event: MouseEvent) => {
      const x = event.clientX - spanRippleRef.value!.offsetLeft
      const y = event.clientY - spanRippleRef.value!.offsetTop

      spanRippleRef.value!.style.left = `${x}px`
      spanRippleRef.value!.style.top = `${y}px`
      clicked.value = true

      setTimeout(() => {
        clicked.value = false
      }, 300)

      buttonRef.value?.blur()
    }

    return { buttonRef, spanRippleRef, clicked, handleButtonClickEffect }
  },
})
</script>

<style scoped>
.button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 100%;
  overflow: hidden;
  outline: none;
  position: relative;
  width: 100%;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
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

.loader {
  animation: loader-rotation 1s linear infinite;
  border: 3px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 30px;
  width: 30px;
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

.button-ripple {
  animation: ripple 1s;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  height: 100px;
  margin-left: -50px;
  margin-top: -50px;
  right: 0;
  opacity: 0;
  position: absolute;
  width: 100px;
}

@keyframes ripple {
  0% {
    opacity: 1;
    scale: 0;
  }
  100% {
    opacity: 0;
    scale: 10;
  }
}

@keyframes loader-rotation {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
