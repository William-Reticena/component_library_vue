<template>
  <div class="select-container-wrapper-outer">
    <label :for="id">{{ label }}</label>

    <div class="select-container-wrapper-inner">
      <div
        class="select-container-wrapper-content"
        :class="{ [`select--${variant}`]: variant, 'select-focused': selectOpen }"
        :style="{ height, width }"
        id="input-container"
        tabindex="-1"
        @blur="handleBlur"
        @click="handleFocus"
        @mousedown="handleMouse"
      >
        <div class="select-icon-container">
          <slot name="prepend"></slot>
        </div>

        <div class="select-container">
          <input ref="inputRef" class="input" :id="id" v-model="inputValue" @blur="handleBlur" @mousedown="handleMouse" />
        </div>

        <div class="select-icon-container">
          <slot name="append"></slot>
        </div>

        <div class="select-arrow-container">
          <span class="select-arrow" :class="{ 'select-open': selectOpen }"></span>
        </div>
      </div>

      <div class="select-options-wrapper" :class="{ 'select-open': selectOpen }" id="options" tabindex="-1" @blur="handleBlur" @mousedown="handleMouse">
        <ul class="select-options-container">
          <li v-for="(item, index) in optionsToDisplay" class="select-items" :key="index" @click="handleSelection(item)">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="select-message-container">
      <span class="select-message">dfçsfç</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'

export default defineComponent({
  name: 'SelectComponent',
  props: {
    error: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    errorMessage: { type: String, default: '' },
    hideBottomSpace: { type: Boolean, default: false },
    id: { type: String, default: '' },
    height: { type: String, default: '42px' },
    label: { type: String, default: '' },
    modelValue: { type: Object as PropType<number | number[] | string | string[]>, default: () => '' || [], required: true },
    variant: { type: String as PropType<'rounded' | 'semi-rounded'>, default: 'rounded' },
    width: { type: String, default: '160px' },
    options: { type: Array as PropType<number[] | string[]>, default: () => [], required: true },
  },
  setup(props, { emit }) {
    const selectOpen = ref(false)
    const inputRef = ref<HTMLInputElement | null>()
    const inputValue = ref('')
    const updateModel = ref<string | string[]>([])
    let optionsShouldClose = false
    let enableSearch = true

    const initSelect = () => {
      updateModel.value = typeof props.modelValue === 'object' ? [] : ''

      if (props.modelValue !== '' || (typeof updateModel.value === 'object' && updateModel.value.length !== 0)) {
        enableSearch = false

        if (typeof props.modelValue === 'object') inputValue.value = (props.modelValue as string[]).join(', ')
        else inputValue.value = props.modelValue as string
      }
    }

    const handleFocus = () => {
      selectOpen.value = !selectOpen.value
      if (selectOpen.value) optionsShouldClose = true
    }

    const handleMouse = () => (optionsShouldClose = false)

    const handleBlur = () => {
      if (optionsShouldClose) selectOpen.value = false
    }

    const handleSelection = (value: string | number) => {
      optionsShouldClose = true

      if (props.multiple) {
        if (updateModel.value.includes(value as string)) {
          const index = (updateModel.value as string[]).indexOf(value as string)
          ;(updateModel.value as string[]).splice(index, 1)
        } else (updateModel.value as string[]).push(value as string)

        inputValue.value = (updateModel.value as string[]).join(', ')
      } else {
        updateModel.value = value as string
        inputValue.value = value as string
        selectOpen.value = false
      }

      emit('update:modelValue', updateModel.value)
    }

    onMounted(initSelect)

    const optionsToDisplay = computed(() => {
      if (!enableSearch) return props.options
      else return inputValue.value ? (props.options as string[]).filter((option) => option.toLowerCase().includes(inputValue.value.toLowerCase())) : props.options
    })

    return { inputValue, selectOpen, inputRef, handleBlur, handleFocus, handleMouse, handleSelection, optionsToDisplay }
  },
})
</script>

<style scoped>
.select-container-wrapper-outer {
  display: inline-block;
}

.select-container-wrapper-inner {
  position: relative;
}

.select-container-wrapper-content {
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  width: 100%;
}

.select-container-wrapper-content.select--semi-rounded {
  border: 1px solid var(--color-gray-dark);
  border-radius: 8px;
  transition: border 0.3s ease-in;
}

.select-container-wrapper-content.select--semi-rounded.select-focused,
.select-container-wrapper-content.select--semi-rounded:hover {
  border: 1px solid var(--primary-color);
}

.select-icon-container {
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 2.5em;
  overflow: hidden;
  white-space: nowrap;
}

.select-container {
  height: 100%;
  width: 100%;
}

.input {
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  outline: none;
  padding: 0 0 0 1em;
  width: 100%;
}

.select-arrow-container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-right: 0 0.5em 0 0.2em;
  width: 2em;
}

.select-arrow {
  border-bottom: 2px solid var(--color-gray-dark);
  border-right: 2px solid var(--color-gray-dark);
  display: inline-block;
  height: 0.7em;
  rotate: 45deg;
  scale: 0.75;
  transition: rotate 0.2s ease-in-out;
  width: 0.7em;
}

.select-arrow.select-open {
  rotate: 225deg;
}

.select-options-wrapper {
  animation: grow-up 0.2s ease-in-out forwards;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.4);
  display: none;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 2500;
}

.select-options-wrapper.select-open {
  animation: grow-down 0.2s ease-in-out backwards reverse;
  display: block;
}

.select-options-container {
  cursor: initial;
  list-style: none;
  margin: 0.3em 0 0;
  margin-block: 0;
  margin-inline: 0;
  max-height: 15.5em;
  overflow: hidden auto;
  padding: 0;
  padding-inline: 0;
  width: 100%;
}

.select-items {
  display: block;
  cursor: pointer;
  overflow: hidden;
  padding: 0.8em 1em;
  text-overflow: ellipsis;
  width: 100%;
}

.select-items:hover {
  background-color: #e6e6e6;
}

.select-message-container {
  color: red;
  height: 1.5em;
  padding: 0 1em 0;
  width: 100%;
  z-index: -1;
}

.select-message {
  font-size: 0.786em;
}

@keyframes grow-down {
  0% {
    scale: 1;
  }
  100% {
    scale: 0;
  }
}

@keyframes grow-up {
  0% {
    scale: 0;
  }
  100% {
    scale: 1;
  }
}
</style>
