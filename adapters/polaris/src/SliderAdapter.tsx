import * as React from 'react'

import { SliderProps } from '@quick-change/core'

import { RangeSlider } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/RangeSlider
 */
export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <RangeSlider
      label={undefined}
      value={value}
      min={min} max={max}
      disabled={disabled}
      onChange={onChange}
    />
  )
}