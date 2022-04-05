import * as React from 'react'

import { FormProps } from '@quick-change/core'

import { Form } from 'carbon-components-react'

export function FormAdapter({ onSubmit, children }: FormProps) {
  return <Form>{children}</Form>
}