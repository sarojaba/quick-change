import * as React from 'react'

import { ColorPickerProps } from '@quick-change/core'

import { EuiColorPicker, useColorPickerState } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/color-selection
 */
export function ColorPickerAdapter({ type, children }: ColorPickerProps) {
  const [color, setColor, errors] = useColorPickerState()

  return (
    <EuiColorPicker onChange={setColor} color={color} isInvalid={!!errors} />
  )
}