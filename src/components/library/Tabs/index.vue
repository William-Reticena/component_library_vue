<template>
  <div class="tabs-container-wrapper" :style="{ height, width: '100%' }">
    <nav class="tabs-container-content" :style="{ justifyContent: align === 'justify' ? 'center' : align }">
      <ul class="tabs-container-items" :class="{ 'tabs-container-items--vertical': vertical }" :style="{ width: align === 'justify' ? '100%' : 'auto' }">
        <slot></slot>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, provide, ref } from 'vue'

export default defineComponent({
  name: 'TabsComponent',
  props: {
    noCaps: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    align: { type: String as PropType<'center' | 'justify' | 'left' | 'right'>, default: 'center' },
    height: { type: String, default: '3em' },
    modelValue: { type: String, default: '', required: true },
    width: { type: String, default: '100%' },
  },
  setup(props, { emit }) {
    const tabSelected = ref(props.modelValue)
    const tabs = ref<string[]>()

    const handleTabUpdateClick = (tabName: string) => {
      tabSelected.value = tabName
      emit('update:modelValue', tabSelected.value)
    }

    provide('handleTabUpdateClick', handleTabUpdateClick)

    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement
      target.click()
    }

    return { tabs, tabSelected, handleFocus }
  },
})
</script>

<style scoped>
.tabs-container-wrapper {
  background-color: var(--primary-color);
  box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
  /* display: flex; */
  overflow: auto;
  width: 100%;
}

.tabs-container-wrapper::-webkit-scrollbar {
  display: none;
}

.tabs-container-content {
  display: flex;
  height: 100%;
  width: 100%;
}

.tabs-container-items {
  display: flex;
  height: 100%;
  list-style: none;
  width: 100%;
}

.tabs-container-items.tabs-container-items--vertical {
  flex-direction: column;
}

.tabs-item.tabs-item--vertical {
  height: 100%;
}
</style>
