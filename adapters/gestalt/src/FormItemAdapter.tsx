import * as React from 'react'

import { Fieldset } from 'gestalt'

export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return (
    <Fieldset legend={label}>
      {children}
    </Fieldset>
  )
}