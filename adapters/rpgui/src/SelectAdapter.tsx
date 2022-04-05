import * as React from 'react'

import { SelectProps } from '@quick-change/core'

/**
 * @see https://github.com/RonenNess/RPGUI#rpgui-dropdown
 */
export function SelectAdapter({ name, label, size, multiple, rows, disabled, value, onValueChange, children }: SelectProps) {
  return (
    <select className="rpgui-dropdown">{children}</select>
  )
}