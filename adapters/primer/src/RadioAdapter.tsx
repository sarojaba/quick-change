import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { ChoiceInputField, Radio } from '@primer/react'

/**
 * @see https://primer.style/react/ChoiceInputField#radio
 * @param {*} param0 
 * @returns 
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <ChoiceInputField disabled={disabled}>
      <ChoiceInputField.Label>{label}</ChoiceInputField.Label>
      <Radio name={name} value={value} />
    </ChoiceInputField>
  )
}
