import * as React from 'react'

import { KeyboardProps } from '@quick-change/core'

import { KeyboardKey } from '@shopify/polaris'

/**
 * @see https://github.com/Shopify/polaris-react/tree/main/src/components/KeyboardKey
 */
export function KeyboardAdapter({ modifiers, children }: KeyboardProps) {
  return (
    <KeyboardKey>{children}</KeyboardKey>
  )
}