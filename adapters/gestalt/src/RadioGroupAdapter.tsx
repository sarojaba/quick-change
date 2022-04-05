import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { Flex } from 'gestalt'

/**
 * @see https://gestalt.pinterest.systems/radiobutton#RadioButton-Group
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <Flex direction="column" gap={2}>{children}</Flex>
  )
}