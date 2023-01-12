<template>
  <div>
    <Select v-model:simple-v-model="simple" :options="options" error errorMessage="efvjhdbfhdf" />

    {{ model }}
    {{ simple }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Select from './components/library/Select/index.vue'

export default defineComponent({
  components: {
    Select,
  },
  setup() {
    const model = ref([])
    const simple = ref('')
    const options = ref(['one', 'two', 'three'])

    setTimeout(() => {
      simple.value = 'two'
    })

    return { model, simple, options }
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