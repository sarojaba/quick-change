import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@chakra-ui/react'

export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      isChecked={checked}
      isDisabled={disabled}>
      {label}
    </Checkbox>
  )
}