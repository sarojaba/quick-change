import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DatePicker } from '@class101/ui'

/**
 * @see https://ui.class101.dev/form-inputs/datePicker
 */
export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DatePicker
      value={value}
      minDate={min}
      maxDate={max}
      onChange={onChange}
    />
  )
}