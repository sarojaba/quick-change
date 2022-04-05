import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return <div style={{ margin: '5px' }}>
    <label htmlFor={name}>{label}</label>
    <textarea id={name} name={name}></textarea>
  </div>
}