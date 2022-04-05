import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { WiredRadio } from 'react-wired-elements'

export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <WiredRadio
      name={value}
      checked={checked}
      disabled={disabled}>
      {label}
    </WiredRadio>
  )
}
