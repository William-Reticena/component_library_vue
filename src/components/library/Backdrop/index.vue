<template>
  <div class="backdrop" :style="{ backgroundColor: bgColor }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BackdropComponent',
  props: {
    bgColor: { type: String, default: 'rgba(0, 0, 0, 0.5)' },
  },
})
</script>

<style scoped>
.backdrop {
  align-items: center;
  background-color: var(--backdrop-color);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 3000;
}
</style>
