import * as React from 'react'

import { FormGroup } from 'govuk-react'

export function FormItemAdapter({ children }) {
  return (
    <FormGroup>
      {children}
    </FormGroup>
  )
}