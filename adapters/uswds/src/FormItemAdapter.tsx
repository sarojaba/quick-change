import * as React from 'react'

import { FormGroup, Label } from '@trussworks/react-uswds'

export function FormItemAdapter({ children }) {
  const { name, label } = React.Children.only(children).props

  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      {children}
    </FormGroup>
  )
}