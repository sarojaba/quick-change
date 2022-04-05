import * as React from 'react'

import { RadioProps } from '@quick-change/core'

import { RadioButton } from '@shopify/polaris'

/**
 * @see https://polaris.shopify.com/components/forms/radio-button
 * @see https://storybook.polaris.shopify.com/?path=/docs/all-components-radio-button--default-radio-button
 */
export function RadioAdapter({ name, value, label, checked, disabled, onChange }: RadioProps) {
  return (
    <RadioButton
      label={label}
      checked={checked}
      disabled={disabled}
    />
  )
}