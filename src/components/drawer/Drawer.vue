<template>
  <div class="drawer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, ref, watchEffect } from 'vue'
import { UIComponentInfosType } from '@/components/layout/types/layoutType'

export default defineComponent({
  name: 'wr-drawer',
  props: {
    side: { type: String as PropType<'left' | 'right'>, default: 'left' },
    width: { type: String, default: '300px' },
  },
  setup(props) {
    const left = ref('0')
    const right = ref('auto')
    const setUILayoutInfos = inject<(UIComponentInfos: UIComponentInfosType) => void>('setUILayoutInfos')

    watchEffect(() => {
      console.log('verificando repetição no drawer')

      const drawerInfos = { side: props.side, width: props.width }

      left.value = props.side === 'left' ? '0' : 'auto'
      right.value = props.side === 'left' ? 'auto' : '0'

      setUILayoutInfos?.({ component: 'drawer', infos: { drawer: drawerInfos } })
    })

    return {
      left,
      right,
    }
  },
})
</script>

<style scoped>
.drawer {
  background-color: red;
  height: 100vh;
  left: v-bind(left);
  right: v-bind(right);
  position: fixed;
  width: v-bind(width);
  z-index: 1000;
}
</style>
