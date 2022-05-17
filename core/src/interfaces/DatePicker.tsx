import * as React from 'react'

import { useComponents } from '../providers'

export interface DatePickerProps {
  label?: string,
  value?: number,
  min?: number,
  max?: number,
  onChange?: any
}

export function DatePicker({ label, value, min, max, onChange }: DatePickerProps) {
  const { DatePickerAdapter } = useComponents()
  return (
    <DatePickerAdapter
      label={label}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  )
}
