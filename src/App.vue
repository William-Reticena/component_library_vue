<template>
  <div class="wrapper">
    <Drawer v-model="open">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, totam? Asperiores deleniti molestias ducimus aliquam, tenetur quia minima aspernatur cupiditate explicabo eos distinctio
      incidunt excepturi libero. Quae dolore magni quasi!
    </Drawer>
    <button @click="open = !open">toggle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Drawer from './components/library/Drawer/index.vue'

export default defineComponent({
  components: {
    Drawer,
  },
  setup() {
    const open = ref(true)

    return { open }
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

.wrapper {
  display: grid;
  grid: 1fr / 1fr 1fr;
}
</style>