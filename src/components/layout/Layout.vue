<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, provide, ref, watch } from 'vue'
import { UIComponentInfosType, UILayoutInfosType } from '@/components/layout/types/layoutType'

export default defineComponent({
  name: 'wr-layout',
  props: {
    modelValue: { type: Object as PropType<UILayoutInfosType>, default: () => ({}) },
  },
  setup(props, { emit }) {
    const UILayoutInfos = ref<UILayoutInfosType>(props.modelValue)

    const setUILayoutInfos = (UIComponentInfos: UIComponentInfosType) => {
      if (UIComponentInfos.component === 'drawer' && UIComponentInfos.infos.drawer) {
        UILayoutInfos.value.drawer = {
          side: UIComponentInfos.infos.drawer.side,
          width: UIComponentInfos.infos.drawer.width,
        }
      } else if (UIComponentInfos.component === 'header' && UIComponentInfos.infos.header) {
        UILayoutInfos.value.header = {
          height: UIComponentInfos.infos.header.height,
          position: UIComponentInfos.infos.header.position,
        }
      } else if (UIComponentInfos.component === 'footer' && UIComponentInfos.infos.footer) {
        UILayoutInfos.value.footer = {
          height: UIComponentInfos.infos.footer.height,
        }
      }
    }

    watch(UILayoutInfos, () => emit('update:modelValue', UILayoutInfos.value), { deep: true })

    provide('setUILayoutInfos', setUILayoutInfos)
  },
})
</script>

<style scoped>
.layout {
  background-color: aquamarine;
  min-height: 100vh;
  position: relative;
}
</style>
