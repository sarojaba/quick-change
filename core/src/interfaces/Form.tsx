import * as React from 'react'

import { useComponents } from '../providers'

export interface FormProps {
  onSubmit: any,
  children: any
}

export function Form({ onSubmit, children }: FormProps) {
  const { FormAdapter, FormItemAdapter } = useComponents()

  const newChildren = React.Children.map(children, child => {
    return (
      <FormItemAdapter>
        {child}
      </FormItemAdapter>
    )
  })
  
  return (
    <FormAdapter onSubmit={onSubmit}>
      {newChildren}
    </FormAdapter>
  )
}
