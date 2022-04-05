import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DuetDatePicker as DatePicker } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/date-picker/
 */
export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DatePicker
      label={label}
      value={value}
    />
  )
}