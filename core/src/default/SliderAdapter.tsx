import * as React from 'react'

import { SliderProps } from '../interfaces'

/**
 * @see 
 */
export function SliderAdapter({ min, max, value, disabled, onChange }: SliderProps) {
  return (
    <input type="range"
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}