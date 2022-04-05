import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { Range } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/range
 */
export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <Range
      value={value}
      min={min}
      max={max}
      disabled={disabled}
      onChange={onChange}
    />
  )
}