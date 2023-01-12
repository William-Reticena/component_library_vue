<template>
  <div class="input-container-wrapper-outer" :style="{ width: fullWidth ? '100%' : 'min-content' }" @click="inputRef?.focus()">
    <label :for="forLabel">{{ label }}</label>

    <div class="input-container-wrapper-inner" :class="{ [`input--${variant}`]: variant, ...classNames, 'input--disabled': disabled }" :style="{ height, width: fullWidth ? '100%' : width }">
      <div class="input-icon-container">
        <slot name="prepend"></slot>
      </div>

      <div class="input-container">
        <input
          ref="inputRef"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          class="input"
          :disabled="disabled"
          :id="forLabel"
          :maxlength="mask.length || maxLength"
          :readonly="readOnly"
          :type="type"
          v-model="inputValue"
          @blur="handleInputFocus(false)"
          @focus="handleInputFocus(true)"
        />
      </div>

      <div class="input-icon-container">
        <slot name="append"></slot>
      </div>
    </div>

    <div v-if="!hideBottomSpace" class="input-message-container">
      <span v-if="error" class="input-message">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from 'vue'

export default defineComponent({
  name: 'InputComponent',
  props: {
    autofocus: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: false },
    hideBottomSpace: { type: Boolean, default: false },
    readOnly: { type: Boolean, default: false },
    maxLength: { type: Number, default: -1 },
    autocomplete: { type: String as PropType<'off' | 'on'>, default: 'off' },
    errorMessage: { type: String, default: '' },
    for: { type: String, default: '' },
    height: { type: String, default: '42px' },
    label: { type: String, default: '' },
    mask: { type: String, default: '' },
    modelModifiers: {
      type: Object,
      default: () => ({
        'no-special-chars': false,
        'only-alphabetic': false,
        'only-numbers': false,
        'unmasked-value': false,
      }),
    },
    modelValue: { type: String, default: '', required: true },
    type: { type: String as PropType<'text' | 'number'>, default: 'text' },
    variant: { type: String as PropType<'primary' | 'secondary'>, default: 'primary' },
    width: { type: String, default: '160px' },
  },
  setup(props, { emit }) {
    const forLabel = ref(props.for)
    const inputRef = ref<HTMLInputElement | null>(null)
    const inputValue = ref('')
    const inputStates = ref({ focused: false, disabled: false })
    const classNames = ref({ 'input-focused': false })

    const initInput = () => {
      if (props.modelValue) inputValue.value = props.modelValue
    }

    const handleInputFocus = (state: boolean) => (classNames.value = { 'input-focused': state })

    const handleMask = (currentValue: string, prevValue: string, mask: string) => {
      if (!isNaN(Number(currentValue[currentValue.length - 1])) || currentValue[currentValue.length - 1] === mask[currentValue.length - 1]) {
        if (currentValue === mask[0]) inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1)
        else if (mask[0] !== '#' && inputValue.value.length === 1) inputValue.value = mask[0] + currentValue

        if (mask[inputValue.value.length] !== '#' && inputValue.value.length < mask.length) {
          if (prevValue.length < currentValue.length) inputValue.value = inputValue.value + mask[inputValue.value.length]
          else inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1)
        }
      } else inputValue.value = prevValue
    }

    const watchModelChange = (currentValue: string, prevValue: string) => {
      let updateModel = inputValue.value

      if (props.mask) handleMask(currentValue, prevValue, props.mask)

      if (props.modelModifiers['only-numbers'] || (props.modelModifiers['unmasked-value'] && props.mask)) updateModel = inputValue.value.replace(/[^0-9]/g, '')
      else if (props.modelModifiers['only-alphabetic']) updateModel = inputValue.value.replace(/[^a-zA-Z ]/g, '')
      else if (props.modelModifiers['no-special-chars']) updateModel = inputValue.value.replace(/[^a-zA-Z0-9]/g, '')

      if (!props.mask) inputValue.value = updateModel

      emit('update:modelValue', updateModel)
    }

    const handleAsyncUpdateModel = (currentValue: string) => {
      let i = 0
      inputValue.value = props.mask.replace(/#/g, () => currentValue[i++])
    }

    onMounted(initInput)

    watch(inputValue, (currentValue, prevValue) => watchModelChange(currentValue, prevValue))
    watch(
      () => props.modelValue,
      (currentValue, prevValue) => {
        if (prevValue === '' && currentValue !== '' && props.mask) handleAsyncUpdateModel(currentValue)
      }
    )

    return { forLabel, inputValue, inputRef, classNames, handleInputFocus }
  },
})
</script>

<style scoped>
.input-container-wrapper-outer {
  cursor: text;
  display: inline-block !important;
}

.input-container-wrapper-inner {
  box-sizing: border-box;
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100%;
}

.input-container-wrapper-inner.input--primary {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  transition: border 0.2s ease-in;
}

.input-container-wrapper-inner.input--primary.input-focused,
.input-container-wrapper-inner.input--primary:hover {
  border: 1px solid var(--primary-color);
}

.input-container-wrapper-inner.input--primary.input--disabled:hover {
  border: 1px solid #e5e5e5;
}

.input-icon-container {
  align-items: center;
  display: flex;
  justify-content: center;
}

.input-container {
  height: 100%;
  width: 100%;
}

.input {
  background-color: transparent;
  border: none;
  height: 100%;
  outline: none;
  padding: 0 1em 0;
  width: 100%;
}

.input:disabled {
  cursor: not-allowed;
}

.input-message-container {
  color: red;
  height: 1.5em;
  padding: 0 1em 0;
}

.input-message {
  font-size: 0.786em;
}
</style>
