import React, { Fragment } from 'react'

import { CheckboxProps } from '@quick-change/core'

/**
 * @param {*} param0 
 * @see https://github.com/RonenNess/RPGUI#rpgui-checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  
  return <>
    <input type="checkbox"
      className="rpgui-checkbox"
      checked={checked}
      disabled={disabled}
    />
    <label>{label}</label>
  </>
}
