import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { Radio } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/inputs/selection-controls
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <Radio
      label={label}
      disabled={disabled}
    />
  )
}