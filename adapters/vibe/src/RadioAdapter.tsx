import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { RadioButton } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/inputs-radio-button--overview
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <RadioButton
      text={label}
      checked={checked}
      disabled={disabled}
      onSelect={e => onChange(e.target)}
    />
  )
}