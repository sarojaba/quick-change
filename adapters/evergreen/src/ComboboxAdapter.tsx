import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { Autocomplete, TextInput } from 'evergreen-ui'

/**
 * @see https://evergreen.segment.com/components/autocomplete
 */
export function ComboboxAdapter({ label, value, children }: ComboboxProps) {

  const options = React.Children.map(children, child => {
    return child.props.children
  })

  return (
    <Autocomplete
      title={label}
      onChange={item => console.log(item)}
      items={options}
    >
      {props => {
        const { getInputProps, getRef, inputValue } = props
        return (
          <TextInput
            placeholder={label}
            value={inputValue}
            ref={getRef}
            {...getInputProps()}
          />
        )
      }}
    </Autocomplete>
  )
}