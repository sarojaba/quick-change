import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DateInput } from '@instructure/ui'

/**
 * @see https://instructure.design/#DateInput
 */
export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {

  return (
    <DateInput.Day
      date={new Date().toISOString()}
      label={label}
    />
  )
}