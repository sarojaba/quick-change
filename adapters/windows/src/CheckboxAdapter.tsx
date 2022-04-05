import React, { Fragment } from 'react'

import { CheckboxProps, CheckboxGroupProps } from '@quick-change/core'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <div className="field-row">
      <input type="checkbox" />
      <label>{label}</label>
    </div>
  )
}

export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return children
}