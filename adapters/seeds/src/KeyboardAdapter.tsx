import * as React from 'react'

import { KeyboardProps } from '@quick-change/core'

import { KeyboardKey } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/keyboard-key
 */
export function KeyboardAdapter({ modifiers, children }: KeyboardProps) {
  
  return <>
    {modifiers.map(m => <KeyboardKey>{m}</KeyboardKey>)}
    <KeyboardKey>{children}</KeyboardKey>
  </>
}