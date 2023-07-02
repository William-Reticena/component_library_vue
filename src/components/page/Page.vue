<template>
  <main class="page">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { UILayoutInfosType } from '@/components/layout/types/layoutType'

export default defineComponent({
  name: 'wr-page',
  props: {
    UILayoutInfos: { type: Object as PropType<UILayoutInfosType>, default: () => ({}) },
  },
  setup(props) {
    const pageMargins = ref('0 0 0 0')

    watch(
      () => props.UILayoutInfos.drawer,
      () => {
        if (props.UILayoutInfos.drawer) {
          const margin = pageMargins.value.split(' ')
          const drawerSide = props.UILayoutInfos.drawer.side
          const drawerWidth = props.UILayoutInfos.drawer.width

          if (drawerSide === 'left') {
            margin[1] = '0'
            margin[3] = drawerWidth
          } else {
            margin[1] = drawerWidth
            margin[3] = '0'
          }
          pageMargins.value = margin.join(' ')
        }
      }
    )

    watch(
      () => props.UILayoutInfos.header,
      () => {
        if (props.UILayoutInfos.header) {
          const margin = pageMargins.value.split(' ')
          const headerHeight = props.UILayoutInfos.header.height

          console.log(props.UILayoutInfos.header)
          margin[0] = headerHeight

          pageMargins.value = margin.join(' ')
        }
      }
    )

    watch(
      () => props.UILayoutInfos.footer,
      () => {
        if (props.UILayoutInfos.footer) {
          const margin = pageMargins.value.split(' ')
          const footerHeight = props.UILayoutInfos.footer.height

          margin[2] = footerHeight

          pageMargins.value = margin.join(' ')
        }
      }
    )

    return { pageMargins }
  },
})
</script>

<style scoped>
.page {
  padding: v-bind(pageMargins);
}
</style>
