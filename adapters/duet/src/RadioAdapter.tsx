import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { DuetRadio as Radio } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/radio/
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio
      name={name}
      label={label}
      value={value}
      checked={checked}
      disabled={disabled}
      onDuetChange={onChange}
    />
  )
}