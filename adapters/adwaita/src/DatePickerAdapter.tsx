import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DatePicker } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/datepicker
 */
export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
    />
  )
}