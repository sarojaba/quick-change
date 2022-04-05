import * as React from 'react'

import { ComboboxItemProps } from '@quick-change/core'

import { Autocomplete } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/autocomplete
 */
export function ComboboxItemAdapter({ children }: ComboboxItemProps) {  
  return (
    <Autocomplete.Option>
      {children}
    </Autocomplete.Option>
  )
}