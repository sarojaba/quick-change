import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { RadioInputGroup } from '@instructure/ui'

/**
 * @see https://instructure.design/#RadioInputGroup
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <RadioInputGroup
      name={name}
      description={label}
      value={value}
      layout={inline ? 'columns' : undefined}
      disabled={disabled}
    >
      {children}
    </RadioInputGroup>
  )
}