import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  const props = {
    name: name,
    className: `input ${sizeClassName(size)}`,
    disabled: disabled,
    readOnly: readOnly,
    placeholder: placeholder,
    onChange: onChange,
    onKeyDown: onKeyDown
  }

  if (type) {
    props.type = type
  }

  if (value) {
    props.value = value
  }

  return <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input { ...props } />
    </div>
  </div>  
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
      console.warn(`Not supported size: ${size}`)
      return ''
  }
}