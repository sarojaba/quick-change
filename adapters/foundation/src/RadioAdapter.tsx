import React, { Fragment } from 'react'

import { RadioProps } from '@quick-change/core'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return <>
    <input type="radio"
      name={ name }
      value={ value }
      checked={checked}
      disabled={disabled}
    />
    <label>{label}</label>
  </>
}
