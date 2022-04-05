import React, { Fragment } from 'react'

import { CheckboxProps } from '@quick-change/core'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return <>
    <label className="cybr-label">
      <input
        type="checkbox"
        className="cybr-checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </label>
  </>
}