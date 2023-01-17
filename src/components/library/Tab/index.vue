<template>
  <li class="tab-item" tabindex="0">
    <span class="tab-item-content">
      <slot></slot>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TabComponent',
  props: {
    name: { type: String, default: '', required: true },
  },
})
</script>

<style scoped>
.tab-item {
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  transition: opacity 0.2s ease-in-out;
  width: 100%;
}

.tab-item:hover {
  background-color: white;
  opacity: 0.8;
}

.tab-item:focus {
  outline: none;
}

.tab-item-content {
  display: inline-block;
  height: min-content;
  overflow: hidden;
  padding: 0.5em;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
}

.active::before {
  background-color: white;
  border-radius: 15px;
  bottom: 0;
  content: '';
  display: block;
  height: 3px;
  position: absolute;
  /* width: v-bind(widthByTab); */
}
</style>
