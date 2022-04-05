import * as React from 'react'

import { KeyboardProps } from '../interfaces'

/**
 * @see https://developer.mozilla.org/ko/docs/Web/HTML/Element/kbd
 */
export function KeyboardAdapter({ modifiers, children }: KeyboardProps) {
  return <kbd>
    {modifiers.join(' ')}
    {children}
  </kbd>
}