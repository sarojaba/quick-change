import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { RadioGroup } from '@momentum-ui/react';

/**
 * @see https://momentum.design/components/radio
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <RadioGroup>{children}</RadioGroup>
  )
}