<template>
  <div class="tab-panels-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TabPanelsComponent',
  props: {
    modelValue: { type: String, default: '', required: true },
  },
})
</script>
