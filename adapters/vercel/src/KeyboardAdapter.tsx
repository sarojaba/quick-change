import * as React from 'react'

import { KeyboardProps } from '@quick-change/core'

import { Keyboard } from '@geist-ui/core'

export function KeyboardAdapter({ modifiers, children }: KeyboardProps) {
  const props = {}
  modifiers.forEach(m => props[m] = true)
  return <Keyboard {...props}>{children}</Keyboard>
}