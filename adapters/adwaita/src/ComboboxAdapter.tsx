import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { Autocomplete } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/autocomplete
 */
export function ComboboxAdapter({ label, value, children }: ComboboxProps) {

  const options = React.Children.map(children, child => {
    return {
      label: <span>{child.props.children}</span>,
      value: child.props.children
    }
  })

  return (
    <Autocomplete
      size='large'
      placeholder='Search user...'
      options={options}
    />
  )
}