import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Form } from 'react-bootstrap'

export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Form.Control as="textarea" />
  )
}