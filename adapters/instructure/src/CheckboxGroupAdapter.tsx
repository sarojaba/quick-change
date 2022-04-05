import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { CheckboxGroup } from '@instructure/ui'

/**
 * @see https://instructure.design/#CheckboxGroup
 */
export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <CheckboxGroup
      description={label}
    >
      {children}
    </CheckboxGroup>
  )
}