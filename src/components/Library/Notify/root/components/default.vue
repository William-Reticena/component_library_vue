<template>
  <div class="notify-info">{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultComponent',
  props: {
    message: { type: String, default: '' },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.notify-info {
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding: 10px;
  min-width: 30em;
}
</style>
