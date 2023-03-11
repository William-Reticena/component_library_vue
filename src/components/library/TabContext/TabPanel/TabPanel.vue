<template>
  <div class="tab-panel" v-show="currentPanelShown($parent, $attrs)">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ComponentPublicInstance, defineComponent } from 'vue'
import { AttrProps, ParentProps } from './helpers/interfaces'

export default defineComponent({
  name: 'TabPanelComponent',
  setup() {
    const currentPanelShown = (parent: ComponentPublicInstance | null, attrs: AttrProps) => {
      const parentProps = parent as ParentProps
      return parentProps.modelValue === attrs.name
    }

    return { currentPanelShown }
  },
})
</script>
