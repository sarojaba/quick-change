import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { Slider } from 'antd'

export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <Slider
      defaultValue={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}