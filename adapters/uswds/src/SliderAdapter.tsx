import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { RangeInput } from '@trussworks/react-uswds'

export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <RangeInput
      id={undefined}
      name={undefined}
      min={min}
      max={max}
    />
  )
}