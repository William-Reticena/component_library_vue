<template>
  <div>
    <Tabs v-model="tab" align="left">
      <Tab v-for="n in 5" :key="n" :name="'aba ' + n">Aba {{ n }}</Tab>
    </Tabs>

    <TabPanels v-model="tab">
      <TabPanel name="aba 1">Conteúdo da aba 1</TabPanel>
      <TabPanel name="aba 2">Conteúdo da aba 2</TabPanel>
      <TabPanel name="aba 3">Conteúdo da aba 3</TabPanel>
      <TabPanel name="aba 4">Conteúdo da aba 4</TabPanel>
      <TabPanel name="aba 5">Conteúdo da aba 5</TabPanel>
    </TabPanels>

    {{ tab }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from '@/components/library/tabContext/tabs/Tabs.vue'
import Tab from '@/components/library/tabContext/tab/Tab.vue'
import TabPanel from '@/components/library/tabContext/tabPanel/TabPanel.vue'
import TabPanels from '@/components/library/tabContext/tabPanels/TabPanels.vue'

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
@import url('@/styles/colors.css');
@import url('@/styles/typography.css');
@import url('@/styles/global.css');
</style>
