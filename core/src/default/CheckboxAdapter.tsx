import * as React from 'react'

import { CheckboxProps } from '../interfaces'

/**
 * @see 
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <React.Fragment>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
      />
      <label>{label}</label>
    </React.Fragment>
  )
}