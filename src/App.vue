<template>
  <div>
    <InputComponent v-model="model" label="sddef" variant="semi-rounded" errorMessage="teste" error> </InputComponent>
    {{ model }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputComponent from './components/library/Input/index.vue'

export default defineComponent({
  components: {
    InputComponent,
  },
  setup() {
    const model = ref('')
    return { model }
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
  font-size: 1rem;
}
</style>