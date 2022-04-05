import * as React from 'react'

import { Field } from '@atlaskit/form'

export function FormItemAdapter({ children }) {
  const { name, label } = React.Children.only(children).props
  
  return (
    <Field
      name={name}
      label={label}>
      {({ fieldProps, error }) => (
        <>{children}</>
      )}
    </Field>
  )
}