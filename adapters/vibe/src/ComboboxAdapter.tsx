import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { Combobox } from 'monday-ui-react-core'

/**
 * @see 
 */
export function ComboboxAdapter({ label, value, children }: ComboboxProps) {

  const options = React.Children.map(children, child => {
    return { id: child.props.children, label: child.props.children }
  })

  return (
    <Combobox
      options={options}
      placeholder={label}
    />
  )
}