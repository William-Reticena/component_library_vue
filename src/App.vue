<template>
  <div>
    <Collapse v-model="open" label="item a ser expandidodsfsdfdsfdsfg">
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum corporis unde? Quos sed dolorem id accusantium sint aliquam recusandae corrupti expedita esse veritatis? Qui dolores quis
      ullam quas nisi.
    </Collapse>
    <Collapse v-model="open" label="item a ser expandido">
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum corporis unde? Quos sed dolorem id accusantium sint aliquam recusandae corrupti expedita esse veritatis? Qui dolores quis
      ullam quas nisi.
    </Collapse>

    <div>udyfghjsdfhd</div>

    {{ open }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Collapse from './components/library/Collapse/index.vue'

export default defineComponent({
  components: {
    Collapse,
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