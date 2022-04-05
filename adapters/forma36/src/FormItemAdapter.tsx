import * as React from 'react'

import { FormControl } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/form-control
 */
export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      {children}
    </FormControl>
  )
}