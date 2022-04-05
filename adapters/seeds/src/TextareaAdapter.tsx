import * as React from 'react'

import { TextareaProps } from '@quick-change/core'

import { Textarea, Box, Label } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/textarea
 */
export function TextareaAdapter({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  return (
    <Box>
      <Label htmlFor={name}>
        {label}
      </Label>

      <Textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
      />
    </Box>
  )
}