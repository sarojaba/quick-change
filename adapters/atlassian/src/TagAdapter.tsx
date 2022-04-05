import * as React from 'react'

import { TagProps } from '@quick-change/core'

import Tag, { SimpleTag } from '@atlaskit/tag'

/**
 * @see https://atlassian.design/components/tag/
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  if (onClose) {
    return (
      <Tag
        text={children}
        color={colorByType(type)}
        removeButtonLabel="Remove"
      />
    )
  } else {
    return (
      <SimpleTag
        text={children}
        color={colorByType(type)}
      />
    )
  }
}

function colorByType(type) {
  switch (type) {
    case 'primary':
      return 'blue'
    case 'info':
      return 'teal'
    case 'success':
      return 'green'
    case 'warning':
      return 'yellow'
    case 'danger':
      return 'red'
    default:
      return 'standard'
  }
}