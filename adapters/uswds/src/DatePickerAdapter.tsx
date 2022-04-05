import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DatePicker } from '@trussworks/react-uswds'

export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DatePicker
      id={undefined}
      name={undefined}
    />
  )
}