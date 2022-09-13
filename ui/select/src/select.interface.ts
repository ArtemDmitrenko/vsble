import { InputHTMLAttributes } from 'react'

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  label?: string
  items: string[]
  value?: string
  onChange: (item: string) => void
  placeholder?: string
}
