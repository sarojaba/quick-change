import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/checkbox
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      onChange={onChange}
    />
  )
}