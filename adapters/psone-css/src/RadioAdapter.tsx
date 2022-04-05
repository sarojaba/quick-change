import * as React from 'react'

import { RadioProps } from '@quick-change/core'

/**
 * @see 
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <label>
      <input type="radio" name={name} value={value} checked={checked} />
      <span className="option">
        {label}
        {
          checked
            ? <span className="click" />
            : null
        }
      </span>
    </label>
  )
}