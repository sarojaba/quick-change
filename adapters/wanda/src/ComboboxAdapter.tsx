import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { Autocomplete } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/autocomplete
 */
export function ComboboxAdapter({ label, value, children }: ComboboxProps) {  
  return (
    <Autocomplete>
      {children}
    </Autocomplete>
  )
}