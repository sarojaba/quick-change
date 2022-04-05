import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { CheckboxGroup } from '@chakra-ui/react'

export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
      {children}
    </CheckboxGroup>
  )
}