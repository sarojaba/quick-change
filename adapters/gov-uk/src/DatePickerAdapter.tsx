import * as React from 'react'

import { DatePickerProps } from '@quick-change/core'

import { DateField } from 'govuk-react'

export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  return (
    <DateField>{}</DateField>
  )
}