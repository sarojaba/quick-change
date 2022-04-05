import * as React from 'react'

import { RadioProps } from '../interfaces'

/**
 * @see 
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <label htmlFor={value}>
      <input id={value} name={name} type="radio" /> {label}
    </label>
  )
}