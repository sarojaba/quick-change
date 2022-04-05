import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Form } from 'react-bootstrap'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Form.Check
      type="checkbox"
      id={label} name={ label }
      value={ label }
      checked={ checked }
      disabled={ disabled }
      label={label}
    />
  )
}