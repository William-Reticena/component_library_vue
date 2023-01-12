<template>
  <div>
    <Modal v-model="open"> </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Modal from './components/library/Modal/index.vue'

export default defineComponent({
  components: {
    Modal,
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
</style>