export class NotifyOptions {
  color?: string = '#fff'
  component?: string = 'default'
  message?: string = ''
  position?: 'bottom' | 'bottom-left' | 'bottom-right' | 'center' | 'top' | 'top-left' | 'top-right' = 'top'
  textColor?: string = '#000'
  timeout?: number = 5000
  type?: 'temporary' | 'permanent' = 'temporary'
}

export interface NotifyConfig {
  notify: (options?: NotifyOptions) => void
  options: NotifyOptions
  visibility: boolean
}
