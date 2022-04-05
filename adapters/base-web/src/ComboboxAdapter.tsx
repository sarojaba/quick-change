import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { Combobox } from 'baseui/combobox'

export function ComboboxAdapter({ label, value, children }: ComboboxProps) {

  const options = React.Children.map(children, child => {
    return { label: child.props.children, id: child.props.children }
  })

  return (
    <Combobox
      value={value}
      options={options}
      mapOptionToString={option => option.label}
    />
  )
}
