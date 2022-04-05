import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from 'antd'

/**
 * @see https://ant.design/components/checkbox/
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      checked={checked}
      disabled={disabled}>
      {label}
    </Checkbox>
  )
}