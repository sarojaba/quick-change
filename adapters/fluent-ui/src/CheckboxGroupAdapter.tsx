import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { Stack } from '@fluentui/react'

export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <Stack tokens={{childrenGap: 10}}>{children}</Stack>
  )
}