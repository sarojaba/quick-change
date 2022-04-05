import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Form } from 'react-bootstrap'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Form.Check
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      label={label}
      onChange={onChange}
    />
  )
}