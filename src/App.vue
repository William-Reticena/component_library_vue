<template>
  <div>
    <Tabs v-model="tab" align="left">
      <Tab v-for="n in 4" :key="n" :name="'aba ' + n">Aba {{ n }}</Tab>
    </Tabs>

    <TabPanels v-model="tab">
      <TabPanel name="aba 1">Conteúdo da aba 1</TabPanel>
      <TabPanel name="aba 2">Conteúdo da aba 2</TabPanel>
      <TabPanel name="aba 3">Conteúdo da aba 3</TabPanel>
      <TabPanel name="aba 4">Conteúdo da aba 4</TabPanel>
    </TabPanels>

    {{ tab }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from './components/library/Tabs/index.vue'
import Tab from './components/library/Tab/index.vue'
import TabPanel from './components/library/TabPanel/index.vue'
import TabPanels from './components/library/TabPanels/index.vue'

export default defineComponent({
  components: {
    Tabs,
    Tab,
    TabPanel,
    TabPanels,
  },
  setup() {
    const tab = ref('')

    setTimeout(() => {
      tab.value = 'aba 2'
    }, 2000)

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