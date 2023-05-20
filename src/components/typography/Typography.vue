<template>
  <div class="typography-wrapper">
    <h1 v-if="variant === 'h1'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h1>

    <h2 v-else-if="variant === 'h2'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h2>

    <h3 v-else-if="variant === 'h3'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h3>

    <h4 v-else-if="variant === 'h4'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h4>

    <h5 v-else-if="variant === 'h5'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h5>

    <h6 v-else-if="variant === 'h6'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></h6>

    <p v-else-if="variant === 'paragraph'" :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></p>

    <div v-else :class="{ [`typography-variant__${variant}`]: !!variant }"><slot></slot></div>

    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { VariantType } from './types'

export default defineComponent({
  name: 'TypographyComponent',
  props: {
    fontShrinkRate: { type: String, default: '20%' },
    fontSizeKernel: { type: String, default: '1rem' },
    variant: { type: String as PropType<VariantType>, default: 'body1' },
    variantStyle: { type: String, default: '' },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.typography-wrapper {
  font-size: calc(v-bind(fontSizeKernel) - v-bind(fontShrinkRate));
}

.typography-variant__h1 {
  font-size: 6em;
}

@media (min-width: 768px) {
  .typography-wrapper {
    font-size: v-bind(fontSizeKernel);
  }
}
</style>
