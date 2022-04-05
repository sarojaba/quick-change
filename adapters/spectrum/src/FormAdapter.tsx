import * as React from 'react'

import { FormProps } from '@quick-change/core'

import { Form } from '@adobe/react-spectrum'

export function FormAdapter({ onSubmit, children }: FormProps) {
  return <Form>{children}</Form>
}
