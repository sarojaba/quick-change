import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { ComboBox } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/combo-box
 */
export function ComboboxAdapter({ label, value, children }: ComboboxProps) {

  const options = React.Children.map(children, child => {
    return child.props.children
  })

  return (
    <ComboBox options={options} />
  )
}