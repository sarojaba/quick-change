import * as React from 'react'

import { EuiFormRow } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/form-controls#form-control-layout
 */
export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return (
    <EuiFormRow label={label}>
      {children}
    </EuiFormRow>
  )
}