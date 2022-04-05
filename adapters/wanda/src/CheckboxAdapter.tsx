import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/selection-controls
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      disabled={disabled}
    />
  )
}