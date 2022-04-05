import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { CheckboxGroup } from '@guardian/source-react-components'

export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <CheckboxGroup name="">
      {children}
    </CheckboxGroup>
  )
}