import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DatePicker } from 'gestalt-datepicker'

export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DatePicker
      id={undefined}
      label={undefined}
      onChange={undefined}
    />
  )
}