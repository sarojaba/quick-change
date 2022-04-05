import * as React from 'react'

import { TagProps } from '@quick-change/core'

import { Tag } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-tag--default
 */
export function TagAdapter({ type, onClick, onClose, children }: TagProps) {
  return (
    <Tag
      onClick={onClick}
      onClickCloseBtn={onClose}
    >
      {children}
    </Tag>
  )
}