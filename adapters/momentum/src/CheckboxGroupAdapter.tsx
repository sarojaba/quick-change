import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { CheckboxGroup } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/checkbox
 */
export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <CheckboxGroup>
      {children}
    </CheckboxGroup>
  )
}