import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { Autocomplete } from '@primer/react'

export function ComboboxAdapter({ label, value, children }: ComboboxProps) {
  const items = React.Children.map(children, child => {
    return child.props.children
  })
  
  return (
    <Autocomplete>
      <Autocomplete.Input/>
      <Autocomplete.Overlay>
        <Autocomplete.Menu items={items} selectedItemIds={[]} />
      </Autocomplete.Overlay>
    </Autocomplete>
  )
}
