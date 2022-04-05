import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { ChoiceInputField, Checkbox } from '@primer/react'

/**
 * @see https://primer.style/react/ChoiceInputField#checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <ChoiceInputField disabled={disabled}>
      <ChoiceInputField.Label>{label}</ChoiceInputField.Label>
      <Checkbox
        checked={checked}
        disabled={disabled}
      />
    </ChoiceInputField>
  )
}
