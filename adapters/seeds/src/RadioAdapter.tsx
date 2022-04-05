import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/radio
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio
      name={name}
      label={value}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}