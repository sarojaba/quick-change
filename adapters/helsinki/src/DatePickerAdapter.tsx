import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DateInput } from 'hds-react'

export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DateInput
      id={undefined}
      minDate={new Date(min)}
      maxDate={new Date(max)}
      // disabled={disabled}
    />
  )
}