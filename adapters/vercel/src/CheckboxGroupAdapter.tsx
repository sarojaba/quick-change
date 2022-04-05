import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { Checkbox } from '@geist-ui/core'

export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return <Checkbox.Group value={[]}>{children}</Checkbox.Group>
}