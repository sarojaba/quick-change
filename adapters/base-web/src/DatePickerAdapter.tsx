import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DatePicker } from 'baseui/datepicker'

export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DatePicker
      value={value}
      minDate={min}
      maxDate={max}
    />
  )
}