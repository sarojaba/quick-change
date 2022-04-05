import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { RangeInput } from 'grommet'

export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <RangeInput
      value={value}      
      min={min}
      max={max}
      onChange={onChange}
    />
  )
}