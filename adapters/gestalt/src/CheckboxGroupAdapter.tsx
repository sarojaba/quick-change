import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { Flex } from 'gestalt'

/**
 * @see https://gestalt.pinterest.systems/checkbox#group
 */
export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <Flex direction="column" gap={2}>{children}</Flex>
  )
}