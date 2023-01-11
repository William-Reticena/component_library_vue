<template>
  <div>
    <Button> <template #label> Hehehe </template> </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './components/library/Button/index.vue'

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    return {}
  },
})
</script>

<style>
:root {
  --primary-color: #1976d2;
  --secondary-color: #26a69a;
}
</style>