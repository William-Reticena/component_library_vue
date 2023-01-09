<template>
  <div v-show="modelValue">
    <teleport to="#notify-root">
      <div v-show="modelValue" class="notify-wrapper" :class="{ [`notify-wrapper--${config.position}`]: config.position }" :style="{ left: middle !== 'auto' ? middle : 'auto' }">
        <div
          ref="notifyRef"
          class="notify-content"
          :class="{ [`notify-content--${config.position}`]: config.position }"
          :style="{ animationDuration: config.timeout + 'ms', backgroundColor: config.color, color: config.textColor }"
        >
          <div v-if="modelValue">
            <component :is="config.component" :message="config.message" />
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, onUpdated, PropType, ref } from 'vue'
import { NotifyOptions } from '..'
import Default from './components/default.vue'

export default defineComponent({
  name: 'NotifyComponent',
  props: {
    config: { type: Object as PropType<NotifyOptions>, default: () => new NotifyOptions(), required: true },
    modelValue: { type: Boolean, default: false, required: true },
  },
  components: {
    Default,
  },
  setup(props, { emit }) {
    const middle = ref('auto')
    const notifyRef = ref<HTMLElement | null>(null)
    let timeout: number

    onMounted(() => {
      timeout = setTimeout(() => {
        emit('update:modelValue', false)
      }, props.config.timeout)
    })

    onUpdated(() => {
      if (props.config.position === 'top' || props.config.position === 'bottom' || props.config.position === 'center') {
        middle.value = notifyRef.value ? `calc(50% - ${notifyRef.value.clientWidth / 2}px - 1em)` : 'auto'
      }
    })

    onUnmounted(() => clearTimeout(timeout))

    return { notifyRef, middle }
  },
})
</script>

<style scoped>
.notify-wrapper {
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 1em;
  position: absolute;
}

.notify-wrapper--top {
  top: 0;
}

.notify-wrapper--top-left {
  top: 0;
  left: 0;
}

.notify-wrapper--top-right {
  top: 0;
  right: 0;
}

.notify-wrapper--center {
  top: 50%;
}

.notify-wrapper--bottom {
  bottom: 0;
  left: 0;
}

.notify-wrapper--bottom-left {
  bottom: 0;
}

.notify-wrapper--bottom-right {
  bottom: 0;
  right: 0;
}

.notify-content {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3000;
}

.notify-content--top {
  animation: top-to-down forwards ease-in-out;
}

.notify-content--bottom-left,
.notify-content--top-left {
  animation: left-to-right forwards ease-in-out;
}

.notify-content--center {
  animation: center forwards ease-in-out;
}

.notify-content--bottom-right,
.notify-content--top-right {
  animation: right-to-left forwards ease-out;
}

.notify-content--bottom {
  animation: bottom-to-up forwards ease-in-out;
}

@keyframes top-to-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  25% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  75% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}

@keyframes left-to-right {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  25% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
  }
  75% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}

@keyframes center {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  25% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  75% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}

@keyframes right-to-left {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  25% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
  }
  75% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}

@keyframes bottom-to-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  25% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  75% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
