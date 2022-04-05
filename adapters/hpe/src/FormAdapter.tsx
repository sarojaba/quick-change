import * as React from 'react'

import { FormProps } from '@quick-change/core'

import { Form } from 'grommet'

export function FormAdapter({ onSubmit, children }: FormProps) {
  return (
    <Form onSubmit={onSubmit}>
      {children}
    </Form>
  )
}
