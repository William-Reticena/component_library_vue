<template>
  <div>
    <Tabs v-model="tab">
      <Tab name="aba 1">Aba 1</Tab>
      <Tab name="aba 2">Aba 2</Tab>
      <Tab name="aba 3">Aba 3oldvckzsdvgdfvgdsfgbdfsadfgsdfgdfgdsfgfdghfdghvkdlfjkljgh</Tab>
      <Tab name="aba 3">Aba 3oldvckzsdvgdfvgdsfgbdfsadfgsdfgdfgdsfgfdghfdghvkdlfjkljgh</Tab>
      <Tab name="aba 3">Aba 3oldvckzsdvgdfvgdsfgbdfsadfgsdfgdfgdsfgfdghfdghvkdlfjkljgh</Tab>
      <Tab name="aba 3">Aba 3oldvckzsdvgdfvgdsfgbdfsadfgsdfgdfgdsfgfdghfdghvkdlfjkljgh</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from './components/library/Tabs/index.vue'
import Tab from './components/library/Tab/index.vue'

export default defineComponent({
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const tab = ref('aba 1')

    return { tab }
  },
})
</script>

<style>
:root {
  --primary-color: #1976d2;
  --secondary-color: #26a69a;
  font-size: 14px;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>