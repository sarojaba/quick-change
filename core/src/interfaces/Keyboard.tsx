import * as React from 'react'

import { useComponents } from '../providers'

export interface KeyboardProps {
  // modifiers: arrayOf(string),
  modifiers: any,
  children: any
}

export function Keyboard(props: KeyboardProps) {
  const { KeyboardAdapter } = useComponents()
  return <KeyboardAdapter {...props} />
}
