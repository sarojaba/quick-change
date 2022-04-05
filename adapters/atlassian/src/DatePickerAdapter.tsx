import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DatePicker } from '@atlaskit/datetime-picker'

/**
 * @see https://atlassian.design/components/datetime-picker/date-picker
 */
export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DatePicker defaultValue={value} minDate={min} maxDate={max} />
  )
}