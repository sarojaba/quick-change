import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { WiredCheckBox } from 'react-wired-elements'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return <div>
    <WiredCheckBox checked={checked} disabled={disabled} />
    {label}
  </div>
}