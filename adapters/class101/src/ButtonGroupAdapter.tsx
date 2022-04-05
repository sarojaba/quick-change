import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { ButtonGroup } from '@class101/ui'

/**
 * @see https://ui.class101.dev/components/button-group
 */
export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return (
    <ButtonGroup
      vertical={vertical}
    >
      {children}
    </ButtonGroup>
  )
}
