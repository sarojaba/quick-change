import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { RangeInput } from '@instructure/ui'

/**
 * @see https://instructure.design/#RangeInput
 */
export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <RangeInput
      label={undefined}
      value={value} max={max} min={min}
      disabled={disabled}
      onChange={onChange}
    />
  )
}