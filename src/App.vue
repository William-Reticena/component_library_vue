<template>
  <div>
    <Typography variant="h1" align="right">Heading 1</Typography>
    <Typography variant="h2" color="blue">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="h4">Heading 4</Typography>
    <Typography variant="h5" color="yellow">Heading 5</Typography>
    <Typography variant="h6">Heading 6</Typography>
    <Typography variant="subtitle1" no-wrap>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, alias! Non nihil beatae ab aliquam ratione tenetur, impedit soluta necessitatibus placeat dolor iure error at quasi possimus
      natus optio officiis?
    </Typography>
    <Typography variant="subtitle2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, alias! Non nihil beatae ab aliquam ratione tenetur, impedit soluta necessitatibus placeat dolor iure error at quasi possimus
      natus optio officiis?
    </Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, alias! Non nihil beatae ab aliquam ratione tenetur, impedit soluta necessitatibus placeat dolor iure error at quasi possimus
      natus optio officiis?
    </Typography>
    <Typography variant="body1" align="justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, alias! Non nihil beatae ab aliquam ratione tenetur, impedit soluta necessitatibus placeat dolor iure error at quasi possimus
      natus optio officiis?
    </Typography>
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
