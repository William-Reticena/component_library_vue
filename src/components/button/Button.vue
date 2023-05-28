<template>
  <button ref="buttonRef" class="button" :class="{ [`button-variant__${variant}`]: !!variant, button__rounded: rounded, button__round: round }" @click="handleButtonClickEffect">
    <div v-if="hasIcon.leftIcon" class="button-icon-container">
      <slot name="left-icon"></slot>
    </div>

    <span v-if="!round" class="button-label-content" :class="{ [`${variant}`]: !!variant }">
      <slot> {{ label }} </slot>
    </span>

    <div v-if="hasIcon.rightIcon && !round" class="button-icon-container">
      <slot name="right-icon"></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, ref } from 'vue'
import { ButtonProps } from './types/ButtonProps'

export default defineComponent({
  name: 'ButtonComponent',
  props: { ...ButtonProps },
  setup(props, { slots }) {
    const buttonRef = ref<HTMLButtonElement | null>(null)
    const buttonColor = computed(() => (props.variant === 'outlined' ? props.bgColor : props.color))
    const buttonBgColor = computed(() => (props.variant !== 'contained' ? 'transparent' : props.bgColor))
    const buttonWidth = computed(() => (props.fullWidth ? '100%' : props.width))
    const hasIcon = computed(() => ({ leftIcon: !!slots['left-icon'], rightIcon: !!slots['right-icon'] }))
    const scopedId = getCurrentInstance()?.vnode.component?.proxy?.$options.__scopeId

    const handleButtonClickEffect = (event: MouseEvent) => {
      const span = document.createElement('span')
      span.classList.add('button-ripple')
      span.setAttribute(`${scopedId}`, '')

      const rect = buttonRef.value?.getBoundingClientRect()

      span.style.left = `${event.clientX - rect!.left}px`
      span.style.top = `${event.clientY - rect!.top}px`

      buttonRef.value?.appendChild(span)

      setTimeout(() => buttonRef.value?.removeChild(span), 500)
    }

    // function hexToRgb(hex: string) {
    //   hex = hex.replace(/^#/, '')

    //   const hasShortHand = hex.length === 3

    //   const r = hasShortHand ? parseInt(hex.substring(0, 1).repeat(2), 16) : parseInt(hex.substring(0, 2), 16)
    //   const g = hasShortHand ? parseInt(hex.substring(1, 2).repeat(2), 16) : parseInt(hex.substring(2, 4), 16)
    //   const b = hasShortHand ? parseInt(hex.substring(2, 3).repeat(2), 16) : parseInt(hex.substring(4, 6), 16)

    //   return `rgb(${r}, ${g}, ${b})`
    // }

    // console.log(hexToRgb(props.bgColor))

    return { buttonRef, buttonColor, buttonBgColor, buttonWidth, hasIcon, handleButtonClickEffect }
  },
})
</script>

<style scoped>
.button {
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  flex-wrap: wrap;
  font-size: 1rem;
  justify-content: center;
  min-height: v-bind(height);
  outline: none;
  overflow: hidden;
  padding: 0.313em 1em;
  position: relative;
  text-transform: uppercase;
  width: v-bind(buttonWidth);
  transition: filter 0.3s ease-in-out;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.button:focus,
.button:hover {
  filter: brightness(1.1);
}

.button__rounded {
  border-radius: 50px;
}

.button__round {
  border-radius: 50%;
  height: v-bind(height);
  padding: 0.5em;
  width: v-bind(height);
}

.button-variant__contained {
  background-color: v-bind(buttonBgColor);
}

.button-variant__outlined,
.button-variant__text {
  background-color: transparent;
}

.button-variant__outlined {
  border: 1px solid v-bind(buttonColor);
}

.button-icon-container:first-of-type {
  margin-right: 0.75em;
}

.button-icon-container:last-of-type {
  margin-left: 0.75em;
}

.button-icon-container:first-of-type:last-of-type {
  margin: 0;
}

.button-label-content.contained,
.button-label-content.outlined,
.button-label-content.text {
  color: v-bind(buttonColor);
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
  z-index: -1;
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
</style>
