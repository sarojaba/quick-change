import * as React from 'react'

import { FormProps } from '@quick-change/core'

import { Form } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/form
 */
export function FormAdapter({ onSubmit, children }: FormProps) {
  return (
    <Form onSubmit={onSubmit}>
      {children}
    </Form>
  )
}