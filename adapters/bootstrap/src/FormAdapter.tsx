import * as React from 'react'

import { FormProps } from '@quick-change/core'

import { Form } from 'react-bootstrap'

export function FormAdapter({ onSubmit, children }: FormProps) {
  return <Form>{children}</Form>
}