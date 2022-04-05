import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { Slider } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/slider
 */
export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <Slider
      min={min}
      max={max}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}