import * as React from 'react'

import { CheckboxProps } from '@quick-change/core'

import { Checkbox } from '@shopify/polaris'

/**
 * @see https://storybook.polaris.shopify.com/?path=/docs/all-components-checkbox--default-checkboxes
 */
export function CheckboxAdapter({ label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <Checkbox
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}