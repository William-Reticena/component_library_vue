<template>
  <template v-if="modelValue">
    <teleport to="#modal-root">
      <Backdrop @click.self="!preventClosing ? handleClose() : null">
        <div ref="modalRef" class="modal" :class="{ [`modal--${variant}`]: variant }" :style="{ height, width }" tabindex="-1">
          <div v-if="!hideIcon" class="modal-close-button-container">
            <button class="modal-close-button" @click="!preventClosing ? handleClose() : null">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="modal-content-container">
            <slot></slot>
          </div>
        </div>
      </Backdrop>
    </teleport>
  </template>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, onUpdated, PropType, ref } from 'vue'
import Backdrop from '../Backdrop/index.vue'

export default defineComponent({
  name: 'ModalComponent',
  inheritAttrs: false,
  props: {
    hideIcon: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: true, required: true },
    preventClosing: { type: Boolean, default: false },
    height: { type: String, default: '30%' },
    variant: { type: String as PropType<'primary' | 'secondary'>, default: 'primary' },
    width: { type: String, default: '30%' },
  },
  components: {
    Backdrop,
  },
  setup(props, { emit }) {
    const modalRef = ref<HTMLDivElement | null>(null)

    const initModal = () => {
      modalRef.value?.focus()
      modalRef.value?.addEventListener('keyup', handlePressingEsc)
    }

    const handlePressingEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose()
    }

    const handleClose = () => {
      if (!props.preventClosing) emit('update:modelValue', false)
    }

    onMounted(initModal)
    onUpdated(initModal)
    onUnmounted(() => modalRef.value?.removeEventListener('keyup', handlePressingEsc))

    return { modalRef, handleClose }
  },
})
</script>

<style scoped>
.modal {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  max-height: (100% - 64px);
  max-width: 600px;
  position: relative;
}

.modal:focus {
  outline: none;
}

.modal-close-button-container {
  position: absolute;
  right: 1.5em;
  top: 1.5em;
}

.modal-close-button {
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}

.modal-close-button-icon {
  user-select: none;
  width: 1.5em;
}

.modal-content-container {
  height: 100%;
}
</style>
