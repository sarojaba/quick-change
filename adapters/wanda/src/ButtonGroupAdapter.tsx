import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { ButtonsGroup } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/actions/button#grouping-buttons
 */
export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return (
    <ButtonsGroup>
      {children}
    </ButtonsGroup>
  )
}