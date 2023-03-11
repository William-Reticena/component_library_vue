<template>
  <div class="collapse-wrapper" :style="{ width }">
    <div class="collapse-container-header" :style="{ height }" @click="isExpanded = !isExpanded">
      <div class="collapse-icon-container">
        <slot name="icon"></slot>
      </div>

      <span class="collapse-label-content">{{ label }}</span>

      <div class="collapse-chevron-container">
        <slot name="chevron">
          <svg
            class="collapse-chevron"
            :class="{ 'collapse-chevron--active': isExpanded }"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </slot>
      </div>
    </div>

    <div ref="itemContentRef" class="collapse-content" :class="{ 'collapse-content--active': isExpanded }">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CollapseComponent',
  props: {
    modelValue: { type: Boolean, default: false, required: true },
    height: { type: String, default: '42px' },
    label: { type: String, default: '' },
    width: { type: String, default: '200px' },
  },
  setup(_, { emit }) {
    const isExpanded = ref(false)
    const itemContentRef = ref<HTMLDivElement | null>(null)
    const itemContentHeight = ref('0px')

    watch(isExpanded, () => {
      itemContentHeight.value = itemContentRef.value?.scrollHeight + 'px' || 0 + 'px'
      emit('update:modelValue', isExpanded.value)
    })

    return { isExpanded, itemContentRef, itemContentHeight }
  },
})
</script>

<style scoped>
.collapse-container-header {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1em;
  padding: 0 0.8em;
  transition: background-color 0.2s ease-out;
  width: 100%;
}

.collapse-container-header:hover {
  background-color: #ddd;
}

.collapse-icon-container {
  margin-right: 0.5em;
}

.collapse-chevron-container {
  margin-left: auto;
  scale: 0.8;
}

.collapse-label-content {
  overflow: hidden;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.collapse-chevron {
  transition: rotate 0.2s ease-out;
}

.collapse-chevron.collapse-chevron--active {
  rotate: 180deg;
}

.collapse-content {
  max-height: 0;
  overflow: hidden;
  padding: 0 18px;
  transition: max-height 0.2s ease-out;
}

.collapse-content.collapse-content--active {
  display: block;
  max-height: v-bind(itemContentHeight);
}
</style>
