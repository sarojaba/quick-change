import * as React from 'react'

import { FormField } from 'grommet'

export function FormItemAdapter({ children }) {
  const { name, label } = React.Children.only(children).props

  return (
    <FormField
      name={name}
      label={label}
      // disabled={disabled}
    >
      {children}
    </FormField>
  )
}