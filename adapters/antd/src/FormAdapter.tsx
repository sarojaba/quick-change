import * as React from 'react'

import { FormProps } from '@quick-change/core'

import { Form } from 'antd'

/**
 * @see https://ant.design/components/form/
 */
export function FormAdapter({ onSubmit, children }: FormProps) {
  return (
    <Form>{children}</Form>
  )
}
