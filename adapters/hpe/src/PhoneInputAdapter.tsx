import * as React from 'react'

import { PhoneInputProps } from '@quick-change/core'

import { MaskedInput } from 'grommet'

export function PhoneInputAdapter({ value, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PhoneInputProps) {
  const maskPhone = [
    { fixed: '(' },
    {
      length: 3,
      regexp: /^[0-9]{1,3}$/,
      placeholder: 'xxx',
    },
    { fixed: ')' },
    { fixed: ' ' },
    {
      length: 3,
      regexp: /^[0-9]{1,3}$/,
      placeholder: 'xxx',
    },
    { fixed: '-' },
    {
      length: 4,
      regexp: /^[0-9]{1,4}$/,
      placeholder: 'xxxx',
    },
  ];
  
  return (
    <MaskedInput name="maskedPhone" id="masked-phone" mask={maskPhone} />
  )
}