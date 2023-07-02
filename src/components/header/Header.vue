<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, ref, watchEffect } from 'vue'
import { UIComponentInfosType, UILayoutInfosType } from '@/components/layout/types/layoutType'

export default defineComponent({
  name: 'wr-header',
  props: {
    height: { type: String, default: '80px' },
    position: { type: String as PropType<'back' | 'front'>, default: 'front' },
    UILayoutInfos: { type: Object as PropType<UILayoutInfosType>, default: () => ({}) },
  },
  setup(props) {
    const headerMargins = ref('0 0 0 0')
    const headerPositionZIndex = ref(props.position === 'front' ? '1001' : '999')
    const setUILayoutInfos = inject<(UIComponentInfos: UIComponentInfosType) => void>('setUILayoutInfos')

    watchEffect(() => {
      console.log('verificando repetição no header')
      const headerInfos = { height: props.height, position: props.position }
      const margin = headerMargins.value.split(' ')

      if (props.UILayoutInfos.drawer) {
        const drawerSide = props.UILayoutInfos.drawer.side
        const drawerWidth = props.UILayoutInfos.drawer.width

        if (props.UILayoutInfos.header && props.UILayoutInfos.header.position === 'front') {
          headerPositionZIndex.value = '1001'
        } else {
          headerPositionZIndex.value = '999'
        }

        if (drawerSide === 'left') {
          margin[1] = '0'
          margin[3] = drawerWidth
        } else {
          margin[1] = drawerWidth
          margin[3] = '0'
        }
      }

      headerMargins.value = margin.join(' ')

      setUILayoutInfos?.({ component: 'header', infos: { header: headerInfos } })
    })

    return {
      headerMargins,
      headerPositionZIndex,
    }
  },
})
</script>

<style scoped>
.header {
  background-color: gold;
  height: v-bind(height);
  padding: v-bind(headerMargins);
  position: fixed;
  width: 100%;
  z-index: v-bind(headerPositionZIndex);
}
</style>
