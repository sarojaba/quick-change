import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Chips } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/data-display-chips--overview
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Chips
      color={colorByType(type)}
      label={children}
      readOnly
    />
  )
}

function colorByType(type) {
  switch (type) {
    case 'success':
      return Chips.colors.POSITIVE
    case 'danger':
      return Chips.colors.NEGATIVE
    default:
      return undefined
  }
}