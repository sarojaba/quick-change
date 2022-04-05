import * as React from 'react'

import { SelectProps } from '@quick-change/core'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {

  const onChange = (e) => {
    return onValueChange(e.target.value)
  }

  return (
    <div className="field">
      <label className="label" htmlFor={name}>{label}</label>
      <div className="control">
        <div className={`select ${sizeClassName(size)}`}>
          <select
            id={name}
            name={name}
            disabled={ disabled }
            multiple={ multiple }
            size={ rows }
            value={ value }
            onChange={ onChange }>
            { children }
          </select>
        </div>
      </div>
    </div>
  )
}

function sizeClassName(size) {
  switch(size) {
    case undefined:
      return ''
    case 'large':
      return 'is-large'
    case 'small':
      return 'is-small'
    default:
      throw Error(`Not supported size: ${size}`)
  }
}