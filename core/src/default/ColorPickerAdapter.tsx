import * as React from 'react'

import { ColorPickerProps } from '../interfaces'

/**
 * @see 
 */
export function ColorPickerAdapter({ type, children }: ColorPickerProps) {
  return (
    <input type="color" />
  )
}