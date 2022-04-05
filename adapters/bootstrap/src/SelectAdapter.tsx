import * as React from 'react'

import { SelectProps } from '@quick-change/core'

import { Form } from 'react-bootstrap'

export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <Form.Select>{children}</Form.Select>
  )
}
