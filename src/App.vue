<template>
  <div>
    <Button @click="click">
      <template #left-icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H22M2 12L12 2M2 12L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>

      Só dá o ripple ai

      <template #right-icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H22M2 12L12 2M2 12L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>
    </Button>

    <!-- <Button @click="click">
      <template #left-icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H22M2 12L12 2M2 12L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>

      <template #label> Hsdsdasdfsddfcsfgdgbdfghfghe </template>

      <template #right-icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H22M2 12L12 2M2 12L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>
    </Button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/button/Button.vue'

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
@import url('@/styles/colors.css');
@import url('@/styles/typography.css');
@import url('@/styles/global.css');
</style>
