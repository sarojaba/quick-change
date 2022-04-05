import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Tag } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/Tag
 * @see https://storybook.polaris.shopify.com/?path=/docs/all-components-tag--default-tag
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Tag onClick={onClick} onRemove={onClose}>
      {children}
    </Tag>
  )
}