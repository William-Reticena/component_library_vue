<template>
  <template v-if="modelValue">
    <teleport to="#portal-root">
      <Backdrop @click.self="!preventClosing ? handleClose() : null">
        <div ref="modalRef" class="modal" :class="{ [`modal--${variant}`]: variant }" :style="{ height, width }" tabindex="-1">
          <div v-if="!hideIcon" class="modal-close-button-container" :class="{ [`modal--${variant}`]: variant }">
            <button class="modal-close-button" @click="!preventClosing ? handleClose() : null">
              <img class="modal-close-button-icon" :class="{ [`modal--${variant}`]: variant }" src="@/assets/Icons/close.svg" alt="Fechar" />
            </button>
          </div>

          <div v-if="variant === 'list-summary'" class="modal--list-summary-variant-container">
            <div class="modal--list-summary-variant-backdrop">
              <slot name="list-summary"></slot>
            </div>
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
import Backdrop from '@/components/Library/Backdrop/index.vue'

export default defineComponent({
  name: 'ModalComponent',
  inheritAttrs: false,
  props: {
    hideIcon: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: true, required: true },
    preventClosing: { type: Boolean, default: false },
    height: { type: String, default: '70%' },
    variant: { type: String as PropType<'default' | 'list-summary'>, default: 'default' },
    width: { type: String, default: '60%' },
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
  background-color: var(--white-color);
  border-radius: 40px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  position: relative;
}

.modal:focus {
  outline: none;
}

.modal.modal--list-summary {
  border-radius: 16px;
}

.modal-close-button-container {
  position: absolute;
  right: 3em;
  top: 3em;
}

.modal-close-button-container.modal--list-summary {
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

.modal-close-button-icon.modal--list-summary {
  width: 1.25em;
}

.modal--list-summary-variant-container {
  left: calc(50% - 2.77em);
  position: absolute;
  top: -2.75em;
}

.modal--list-summary-variant-backdrop {
  background-color: var(--white-color);
  border-radius: 50%;
  padding: 0.3em;
}

.modal-content-container {
  height: 100%;
}

@media screen and (max-width: 1024px) {
  .modal-close-button-icon {
    width: 1.25em;
  }
}
</style>
