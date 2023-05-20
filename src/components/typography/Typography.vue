<template>
  <h1 v-if="variant === 'h1'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h1>

  <h2 v-else-if="variant === 'h2'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h2>

  <h3 v-else-if="variant === 'h3'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h3>

  <h4 v-else-if="variant === 'h4'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h4>

  <h5 v-else-if="variant === 'h5'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h5>

  <h6 v-else-if="variant === 'h6'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h6>

  <p v-else-if="variant === 'paragraph'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></p>

  <div v-else :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, PropType, ref, watchEffect } from 'vue'
import { VariantType } from './types'
import { arrayFontSizes } from './utils/fontSizes'

export default defineComponent({
  name: 'TypographyComponent',
  props: {
    fontShrinkRate: { type: Number, default: 0.2 },
    variant: { type: String as PropType<VariantType>, default: 'body1' },
    variantStyle: { type: String, default: '' },
  },
  setup(props) {
    const fontSize = ref('1em')

    const setFontSize = () => {
      const index = arrayFontSizes.findIndex((font) => font.variant === props.variant)
      fontSize.value = `${arrayFontSizes[index].fontSize - arrayFontSizes[index].fontSize * props.fontShrinkRate}em`
    }

    watchEffect(setFontSize)

    return { fontSize }
  },
})
</script>

<style scoped>
.typography-variant__h1,
.typography-variant__h2,
.typography-variant__h3,
.typography-variant__h4,
.typography-variant__h5,
.typography-variant__h6,
.typography-variant__body1,
.typography-variant__body2 {
  font-size: v-bind(fontSize);
}

@media (min-width: 768px) {
  .typography-variant__h1 {
    font-size: 6em;
  }

  .typography-variant__h2 {
    font-size: 3.75em;
  }

  .typography-variant__h3 {
    font-size: 3em;
  }

  .typography-variant__h4 {
    font-size: 2.125em;
  }

  .typography-variant__h5 {
    font-size: 1.5em;
  }

  .typography-variant__h6 {
    font-size: 1.25em;
  }

  .typography-variant__body1 {
    font-size: 1em;
  }

  .typography-variant__body2 {
    font-size: 0.875em;
  }

  .typography-variant__subtitle1 {
    font-size: 1em;
  }
}
</style>
