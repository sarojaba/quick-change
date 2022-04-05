import * as React from 'react'

import { Form } from 'react-bootstrap'

export function FormControl({ type, value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: any) {
  return (
    <Form.Control
      type={type}
      value={value}
      placeholder={placeholder}
      size={sizeBySize(size)}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return 'sm'
    case 'large':
      return 'lg'
    case 'medium':
    default:
      return undefined
  }
}