import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { Callout, Text } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-callout--default
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <Callout
      icon={icon}
      variant={variantByType(type)}
      several
    >
      <Text variant="block" weight="medium">
        {title}
      </Text>
      <Text variant="block" size="small">
        {children}
      </Text>
    </Callout>
  )
}

function variantByType(type) {
  switch (type) {
    case 'info':
    case 'danger':
      return type
    default:
      return undefined
  }
}