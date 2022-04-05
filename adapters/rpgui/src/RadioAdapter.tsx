import React, { Fragment } from 'react'

import { RadioProps } from '@quick-change/core'

/**
 * @see https://github.com/RonenNess/RPGUI#rpgui-radio
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return <>
    <input type="radio"
      className="rpgui-radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
    />
    <label>{label}</label>
  </>
}
