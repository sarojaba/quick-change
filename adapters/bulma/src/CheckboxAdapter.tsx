import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Form } from 'rbx'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Form.Checkbox disabled={disabled}>{label}</Form.Checkbox>
  )
}
