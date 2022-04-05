import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Banner } from '@shopify/polaris'

/**
 * @see https://storybook.polaris.shopify.com/?path=/docs/all-components-banner--default-banners
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Banner
      status={statusByType(type)}
      onDismiss={onClose}
    >
      {children}
    </Banner>
  )
}

function statusByType(type) {
  switch (type) {
    case 'info':
    case 'success':
    case 'warning':
      return type
    case 'danger':
      return 'critical'
    default:
      return undefined
  }
}