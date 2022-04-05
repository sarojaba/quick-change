import * as React from 'react'

import { FormControl } from 'baseui/form-control'

/**
 * @see https://baseweb.design/components/form-control
 */
export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return (
    <FormControl
      label={() => label}
      // disabled={disabled}
    >
      {children}
    </FormControl>
  )
}