<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, ref, watchEffect } from 'vue'
import { UIComponentInfosType, UILayoutInfosType } from '@/components/layout/types/layoutType'

export default defineComponent({
  name: 'wr-footer',
  props: {
    height: { type: String, default: '80px' },
    UILayoutInfos: { type: Object as PropType<UILayoutInfosType>, default: () => ({}) },
  },
  setup(props) {
    const footerMargins = ref('0 0 0 0')
    const setUILayoutInfos = inject<(UIComponentInfos: UIComponentInfosType) => void>('setUILayoutInfos')

    watchEffect(() => {
      const footerInfos = { height: props.height }
      const margin = footerMargins.value.split(' ')

      if (props.UILayoutInfos.drawer) {
        const drawerSide = props.UILayoutInfos.drawer.side
        const drawerWidth = props.UILayoutInfos.drawer.width

        if (drawerSide === 'left') {
          margin[1] = '0'
          margin[3] = drawerWidth
        } else {
          margin[1] = drawerWidth
          margin[3] = '0'
        }
      }

      footerMargins.value = margin.join(' ')

      setUILayoutInfos?.({ component: 'footer', infos: { footer: footerInfos } })
    })

    return { footerMargins }
  },
})
</script>

<style scoped>
.footer {
  background-color: blueviolet;
  height: v-bind(height);
  padding: v-bind(footerMargins);
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
