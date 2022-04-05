import * as React from 'react'

import { DatePickerProps } from '../interfaces'

/**
 * @see https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input/date
 */
export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <input
      type="date"
      value={value}
      min={min}
      max={max}
    />
  )
}