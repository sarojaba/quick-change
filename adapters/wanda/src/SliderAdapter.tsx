import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { Slider } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/slider
 */
export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <Slider
      min={min}
      max={max}
      defaultValue={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}