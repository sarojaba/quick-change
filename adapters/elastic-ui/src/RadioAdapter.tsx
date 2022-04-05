import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { EuiRadio, useGeneratedHtmlId } from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/forms/selection-controls#radio
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  const basicRadioButtonId = useGeneratedHtmlId({ prefix: 'basicRadioButton' })

  return (
    <EuiRadio
      id={basicRadioButtonId}
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}