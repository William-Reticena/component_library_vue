<template>
  <div>
    <Button disabled @click="click">
      <template #label> Hehehe </template>
    </Button>
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
    const click = () => {
      console.log('clicked')
    }

    return { click }
  },
})
</script>

<style>
:root {
  --primary-color: #1976d2;
  --secondary-color: #26a69a;
}
</style>