import * as React from 'react'

import { FormProps } from '@quick-change/core'

import { Form, FormLayout } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/Form
 */
export function FormAdapter({ onSubmit, children }: FormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <FormLayout>
        {children}
      </FormLayout>
    </Form>
  )
}