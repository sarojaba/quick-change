import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { Slider } from '@geist-ui/core'

export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <Slider initialValue={value} min={min} max={max} />
  )
}