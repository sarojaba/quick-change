import * as React from 'react'

import { FormField } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/form-field
 */
export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return (
    <FormField
      label={label}
    >
      {props => children}
    </FormField>
  )
}