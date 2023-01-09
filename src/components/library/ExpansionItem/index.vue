<template>
  <div class="expansion-item-container-wrapper">
    <div class="expansion-item-container">
      <div>label</div>

      <div>Icons</div>
    </div>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExpansionItemComponent',
  props: {
    modelValue: { type: Boolean, default: false, required: true },
    label: { type: String, default: '' },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.expansion-item-container-wrapper {
  background-color: blue;
}

.expansion-item-container {
  /* display: flex; */
  /* justify-content: space-between; */
  background-color: aqua;
  /* align-items: center; */
  /* padding: 0 16px; */
  /* height: 48px; */
}
</style>
