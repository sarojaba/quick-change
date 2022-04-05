import React, { Children } from 'react'

import { ComboboxProps } from '@quick-change/core'

import { AutoComplete } from '@geist-ui/core'

export function ComboboxAdapter({ label, value, children }: ComboboxProps) {
  const options = Children.map(children, child => {
    return {
      label: child.props.children,
      value: child.props.children
    }
  })

  return (
    <AutoComplete placeholder="Enter here" options={options} enterKeyHint={undefined} />
  )
}