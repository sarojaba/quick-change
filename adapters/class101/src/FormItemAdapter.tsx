import * as React from 'react'

import { FormGroup } from '@class101/ui'

/**
 * @see https://ui.class101.dev/form-controls/form-group
 */
export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return (
    <FormGroup label={label}>
      {children}
    </FormGroup>
  )
}