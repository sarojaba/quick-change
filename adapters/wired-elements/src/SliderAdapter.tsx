import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { WiredSlider } from 'react-wired-elements'

export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <WiredSlider min={min} max={max} value={value} />
  )
}