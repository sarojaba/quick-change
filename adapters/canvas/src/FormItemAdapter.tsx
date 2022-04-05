import * as React from 'react'

import { FormField } from '@workday/canvas-kit-react'

/**
 * @see 
 */
export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return (
    <FormField label={label}>{children}</FormField>
  )
}