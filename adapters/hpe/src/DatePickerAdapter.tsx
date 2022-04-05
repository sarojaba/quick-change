import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DateInput } from 'grommet'

export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DateInput
      value={value}
      format="mm/dd/yyyy"
    />
  )
}