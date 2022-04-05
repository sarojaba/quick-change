import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { RadioGroup } from '@guardian/source-react-components'

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <RadioGroup>{children}</RadioGroup>
  )
}