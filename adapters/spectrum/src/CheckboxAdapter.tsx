import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@adobe/react-spectrum'

/**
 * @see https://react-spectrum.adobe.com/react-spectrum/Checkbox.html
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox>{label}</Checkbox>
  )
}