import * as React from 'react'
import moment from 'moment'

import { DatePickerProps } from '@quick-change/core'

import { EuiDatePicker } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/date-picker
 */
export function DatePickerAdapter({ label, value, min, max, onChange }: DatePickerProps) {
  const [startDate, setStartDate] = React.useState(moment())

  const handleChange = (date) => {
    setStartDate(date);
  }

  return (
    <EuiDatePicker selected={startDate} onChange={handleChange} />
  )
}