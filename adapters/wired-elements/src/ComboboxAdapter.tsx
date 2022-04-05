import * as React from 'react'

import { ComboboxProps } from '@quick-change/core'

import { WiredCombo } from 'react-wired-elements'

export function ComboboxAdapter({ label, value, children }: ComboboxProps) {  
  return (
    <WiredCombo>
      {children}
    </WiredCombo>
  )
}
