import * as React from 'react'

import { FormProps } from '@quick-change/core'

import Form, { FormSection } from '@atlaskit/form'

export function FormAdapter({ onSubmit, children }: FormProps) {
  return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <FormSection>{children}</FormSection>
        </form>
      )}
    </Form>
  )
}