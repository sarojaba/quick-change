import * as React from 'react'

import { FormGroup } from '@primer/react'

/**
 * @see 
 */
export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return (
    <FormGroup>
      <FormGroup.Label>{label}</FormGroup.Label>
      {children}
    </FormGroup>
  )
}