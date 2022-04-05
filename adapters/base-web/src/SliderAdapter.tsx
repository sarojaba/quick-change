import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { Slider } from 'baseui/slider'

export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <Slider
      value={[value]}
      min={min}
      max={max}
      disabled={disabled}
      onChange={onChange}
    />
  )
}