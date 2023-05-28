import { PropType } from 'vue'

type VariantType = 'contained' | 'outlined' | 'text'

export const ButtonProps = {
  fullWidth: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  bgColor: {
    type: String,
    default: () => {
      const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color')
      return bgColor ? bgColor : '#1976d2'
    },
  },
  color: {
    type: String,
    default: () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--text-main-color')
      return color ? color : '#fff'
    },
  },
  customStyle: { type: String },
  label: { type: String, default: '' },
  height: { type: String, default: '42px' },
  variant: { type: String as PropType<VariantType>, default: 'contained' },
  width: { type: String, default: 'unset' },
}
