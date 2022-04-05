import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { WiredRadioGroup } from 'react-wired-elements'

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <WiredRadioGroup selected={value}>{children}</WiredRadioGroup>
  )
}