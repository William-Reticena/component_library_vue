<template>
  <h1 v-if="variant === 'h1'" :class="{ [`typography-variant__${variant}`]: !!variant, 'typography__no-wrap': noWrap }"><slot></slot></h1>

  <h2 v-else-if="variant === 'h2'" :class="{ [`typography-variant__${variant}`]: !!variant, 'typography__no-wrap': noWrap }"><slot></slot></h2>

  <h3 v-else-if="variant === 'h3'" :class="{ [`typography-variant__${variant}`]: !!variant, 'typography__no-wrap': noWrap }"><slot></slot></h3>

  <h4 v-else-if="variant === 'h4'" :class="{ [`typography-variant__${variant}`]: !!variant, 'typography__no-wrap': noWrap }"><slot></slot></h4>

  <h5 v-else-if="variant === 'h5'" :class="{ [`typography-variant__${variant}`]: !!variant, 'typography__no-wrap': noWrap }"><slot></slot></h5>

  <h6 v-else-if="variant === 'h6'" :class="{ [`typography-variant__${variant}`]: !!variant, 'typography__no-wrap': noWrap }"><slot></slot></h6>

  <p v-else-if="variant === 'paragraph'" :class="{ [`typography-variant__${variant}`]: !!variant, 'typography__no-wrap': noWrap }"><slot></slot></p>

  <div v-else :class="{ [`typography-variant__${variant}`]: !!variant, 'typography__no-wrap': noWrap }"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from 'vue'
import { AlignmentType, VariantType } from './types'
import { ArrayFontSizes, UnitsMeasurement } from './utils/enums'

export default defineComponent({
  name: 'TypographyComponent',
  props: {
    noWrap: { type: Boolean, default: false },
    fontShrinkRate: { type: Number, default: 0.2 },
    align: { type: String as PropType<AlignmentType>, default: 'inherit' },
    color: { type: String, default: 'var(--main-font-color)' },
    fontSize: { type: String, default: '' },
    variant: { type: String as PropType<VariantType>, default: 'body1' },
    variantStyle: { type: String, default: '' },
  },
  setup(props) {
    const typographyFontSize = ref('1em')
    const fontShrunkSize = ref('1em')

    const setFontSize = () => {
      let size = 1
      let unitMeasurement = 'em'

      if (props.fontSize) {
        size = Number(props.fontSize.match(/\d+/))
        unitMeasurement = props.fontSize.match(UnitsMeasurement)?.[0] || 'em'
      } else size = ArrayFontSizes.find((font) => font.variant === props.variant)?.fontSize || 1

      typographyFontSize.value = `${size}${unitMeasurement}`
      fontShrunkSize.value = `${size - size * props.fontShrinkRate}${unitMeasurement}`
    }

    watchEffect(setFontSize)

    return { fontShrunkSize, typographyFontSize }
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
.typography-variant__body2,
.typography-variant__subtitle1,
.typography-variant__subtitle2 {
  color: v-bind(color);
  font-size: v-bind(fontShrunkSize);
  text-align: v-bind(align);
}

.typography-variant__body2 {
  font-weight: bold;
}

.typography__no-wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .typography-variant__h1 {
    font-size: v-bind(typographyFontSize);
  }

  .typography-variant__h2 {
    font-size: v-bind(typographyFontSize);
  }

  .typography-variant__h3 {
    font-size: v-bind(typographyFontSize);
  }

  .typography-variant__h4 {
    font-size: v-bind(typographyFontSize);
  }

  .typography-variant__h5 {
    font-size: v-bind(typographyFontSize);
  }

  .typography-variant__h6 {
    font-size: v-bind(typographyFontSize);
  }

  .typography-variant__body1 {
    font-size: v-bind(typographyFontSize);
  }

  .typography-variant__body2 {
    font-size: v-bind(typographyFontSize);
  }

  .typography-variant__subtitle1 {
    font-size: v-bind(typographyFontSize);
  }
}
</style>
