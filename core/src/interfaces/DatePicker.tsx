import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
}

const defaultProps = {
  label: undefined,
  value: 0,
  min: 0,
  max: 100,
  onChange: undefined
}

export type DatePickerProps = PropsType<typeof propTypes, typeof defaultProps>

export function DatePicker({ label, value, min, max, onChange }: DatePickerProps) {
  const { DatePickerAdapter } = useComponents()
  return (
    <DatePickerAdapter
      label={label}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  )
}

DatePicker.propTypes = propTypes
DatePicker.defaultProps = defaultProps