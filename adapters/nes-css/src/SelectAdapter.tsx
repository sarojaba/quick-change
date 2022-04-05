import React, { Fragment } from 'react'

import { SelectProps } from '@quick-change/core'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return <>
    <label htmlFor={name}>{label}</label>
    <div className="nes-select">
      <select id={name} onChange={onChange}>{children}</select>
    </div>
  </>
}
