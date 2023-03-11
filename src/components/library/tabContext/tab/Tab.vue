<template>
  <li
    ref="tabRef"
    class="tab-item"
    :class="{ 'tab-item--active': handleActivationTab(name, $parent).active, 'tab-item--justify': handleActivationTab(name, $parent).justify }"
    tabindex="1"
    @click="handleTabChange(name)"
    @focus="handleTabChange(name)"
  >
    <span class="tab-item__content">
      <slot></slot>
    </span>
  </li>
</template>

<script lang="ts">
import { ComponentPublicInstance, defineComponent, inject, ref } from 'vue'
import { ParentAttrs } from './interfaces/parentAttrs'

export default defineComponent({
  name: 'TabComponent',
  props: {
    name: { type: String, default: '', required: true },
  },
  setup() {
    const tabRef = ref<HTMLDataListElement | null>(null)
    const tabInjectedProps = inject<(tabName: string) => void>('handleTabUpdateClick')

    const handleTabChange = (tabName: string) => tabInjectedProps?.(tabName)

    const handleActivationTab = (tabName: string, parentAttrs: ComponentPublicInstance | null) => {
      const parentAttr = parentAttrs as ParentAttrs
      return { active: tabName === parentAttr.modelValue, justify: parentAttr.align === 'justify' }
    }

    return { tabRef, tabInjectedProps, handleTabChange, handleActivationTab }
  },
})
</script>

<style scoped>
.tab-item {
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-width: 5em;
  overflow: hidden;
  position: relative;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
}

.tab-item:hover {
  background-color: #66a6e6;
}

.tab-item:focus {
  outline: none;
}

.tab-item--active::before {
  background-color: white;
  bottom: 0;
  border-radius: 15px;
  content: '';
  height: 2px;
  position: absolute;
  width: 100%;
}

.tab-item--justify {
  min-width: none;
}

.tab-item__content {
  display: inline-block;
  height: min-content;
  overflow: hidden;
  padding: 0.5em;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
}
</style>
