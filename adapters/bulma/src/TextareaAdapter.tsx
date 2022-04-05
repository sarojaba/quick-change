import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>{label}</label>
      <div className="control">
        <textarea
          className="textarea"
          id={name} name={name}
          placeholder={ placeholder }
          rows={ rows }
        />
      </div>
    </div>
  )
}