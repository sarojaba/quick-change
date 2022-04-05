import * as React from 'react'

import { TextInputProps } from '@quick-change/core'

import { Input } from '@geist-ui/core'

/**
 * @see 
 */
export function TextInputAdapter({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  return (
    <Input
      // type={typeByType(type)}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      // value={value}
      enterKeyHint={undefined}>
      {label}
    </Input>
  )
}

// function typeByType(type: any) {
//   switch (type) {
//     case 'secondary':
//     case 'success':
//     case 'warning':
//       return type
//     case 'danger':
//       return 'error'
//     default:
//       return undefined
//   } 
// }