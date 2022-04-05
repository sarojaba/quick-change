import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { DuetRangeSlider as RangeSlider } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/range-slider/
 */
export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <RangeSlider
      // label={label}
      value={value}
      min={min}
      max={max}
      disabled={disabled}
      onDuetChange={onChange}
    />
  )
}