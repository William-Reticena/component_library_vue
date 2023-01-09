<template>
  <div class="checkbox-input-wrapper" @click="checkboxValue = !checkboxValue" @mouseenter="handleHover(true)" @mouseleave="handleHover(false)">
    <div class="checkbox-input-container">
      <div class="checkbox-input" :class="{ 'element-is-hovered': elementIsHovered }" :style="{ height: size, width: size }">
        <div v-show="checkboxValue" class="checkbox-check" :style="{ height: `calc(${size} - 30%)`, width: `calc(${size} - 70%)` }"></div>
      </div>
    </div>

    <div class="checkbox-label-container">
      <label class="checkbox-label" for="">dsdasdfdfsdsfgdfgfdf</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CheckboxComponent',
  props: {
    modelValue: { type: Boolean, default: false, required: true },
    size: { type: String, default: '1.5em' },
  },
  setup(props, { emit }) {
    const checkboxValue = ref(props.modelValue)
    const elementIsHovered = ref(false)

    const handleHover = (state: boolean) => {
      elementIsHovered.value = state
    }

    watch(
      () => checkboxValue.value,
      () => {
        emit('update:modelValue', checkboxValue.value)
      }
    )

    return { checkboxValue, elementIsHovered, handleHover }
  },
})
</script>

<style scoped>
.checkbox-input-wrapper {
  align-items: center;
  cursor: pointer;
  display: flex;
  width: fit-content;
}

.checkbox-input-container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0.3em;
  width: 100%;
}

.checkbox-input {
  align-items: center;
  border: 2px solid #000;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  padding: 0.1em;
  position: relative;
}

.checkbox-input.element-is-hovered,
.checkbox-input:hover {
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.5);
}

.checkbox-check {
  animation: checkbox-check 0.2s ease-in-out;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  box-sizing: border-box;
  margin-bottom: 0.3em;
  position: absolute;
  rotate: 45deg;
  scale: 0.9;
}

.checkbox-label-container {
  padding: 0 0.5em;
}

.checkbox-label {
  cursor: inherit;
}

@keyframes checkbox-check {
  0% {
    height: 0em;
    width: 0em;
  }
  50% {
    height: 0em;
    width: 0.5em;
  }
  100% {
    height: 1em;
  }
}
</style>
