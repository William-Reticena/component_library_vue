import { ComponentPublicInstance } from 'vue'

export interface ParentProps extends ComponentPublicInstance {
  modelValue: null | string
}

export interface AttrProps {
  name?: string
}