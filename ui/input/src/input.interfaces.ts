import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputVariant = 'primary' | 'ghost'

export type InputSize = 'normal' | 'giant'

export interface InputProps extends BaseInputProps {
  variant?: InputVariant
  size?: InputSize
  label?: string
  textAlign?: string
}
