<template>
  <div>
    <Typography variant="subtitle1">teste</Typography>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Typography from './components/typography/Typography.vue'

export default defineComponent({
  components: {
    Typography,
  },
  setup() {
    return {}
  },
})
</script>

<style>
@import url('@/styles/colors.css');
@import url('@/styles/typography.css');
@import url('@/styles/global.css');
</style>
