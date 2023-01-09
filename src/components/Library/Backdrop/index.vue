<template>
  <div class="back-drop">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BackdropComponent',
})
</script>

<style scoped>
.back-drop {
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
