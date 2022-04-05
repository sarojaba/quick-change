import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { Input } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/input
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
    />
  )
}