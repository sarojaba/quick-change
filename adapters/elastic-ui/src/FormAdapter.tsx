import * as React from 'react'

import { FormProps } from '@quick-change/core'

import { EuiForm } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/form-layouts
 */
export function FormAdapter({ onSubmit, children }: FormProps) {
  // const newChildren = React.Children.toArray(children).reduce((pre, cur) => {
  //   return [pre, <EuiSpacer />, cur]
  // })
  return (
    <EuiForm component="form">
      {children}
    </EuiForm>
  )
}