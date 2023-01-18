<template>
  <button type="button" class="collapsible" @click="isExpanded = !isExpanded">Open Collapsible</button>
  <div ref="itemContentRef" class="content" :class="{ active: isExpanded }">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({
  name: 'ExpansionItemComponent',
  props: {
    modelValue: { type: Boolean, default: false, required: true },
    height: { type: String, default: '42px' },
    label: { type: String, default: '' },
    width: { type: String, default: '200px' },
  },
  setup(props, { emit }) {
    const isExpanded = ref(false)
    const itemContentRef = ref<HTMLDivElement | null>(null)
    const itemContentHeight = ref('0px')

    watch(isExpanded, () => {
      itemContentHeight.value = itemContentRef.value?.scrollHeight + 'px' || 0 + 'px'
      emit('update:modelValue', isExpanded.value)
    })

    return { isExpanded, itemContentRef, itemContentHeight }
  },
})
</script>

<style scoped>
.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}

.content.active {
  display: block;
  max-height: v-bind(itemContentHeight);
}
</style>
