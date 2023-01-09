<template>
  <div class="drawer-container-wrapper" :style="{ width: drawerOpened }">
    <div class="drawer-container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'DrawerComponent',
  props: {
    modelValue: { type: Boolean, default: true, required: true },
    miniWidth: { type: String, default: '60px' },
    width: { type: String, default: '300px' },
  },
  setup(props) {
    const drawerOpened = computed(() => (props.modelValue ? props.width : props.miniWidth))

    return { drawerOpened }
  },
})
</script>

<style scoped>
.drawer-container-wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
}

.drawer-container {
  word-break: break-all;
}
</style>
