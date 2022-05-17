import * as React from 'react'

import { useComponents } from '../providers'

export interface ColorPickerProps {
  type?: string,
  children?: any
}

export function ColorPicker({ type, children }: ColorPickerProps) {
  const { ColorPickerAdapter } = useComponents()
  return (
    <ColorPickerAdapter />
  )
}
