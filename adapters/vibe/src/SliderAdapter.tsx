import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { Slider } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/inputs-slider--overview
 */
export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <Slider
      min={min} max={max}
      value={value}
      disabled={disabled}
    />
  )
}