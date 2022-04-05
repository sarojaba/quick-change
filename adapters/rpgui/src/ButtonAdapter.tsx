import * as React from 'react'

import { ButtonProps } from '@quick-change/core'

export function ButtonAdapter({ icon, type, shape, size, disabled, block, onClick, children }: ButtonProps) {
  /**
   * https://github.com/RonenNess/RPGUI#rpgui-button
   */

  const isDown = shape === 'outline' ? 'down' : ''

  return (
    <button type="button"
      className={`rpgui-button ${isDown}`}
      disabled={disabled}
      onClick={onClick}>
      <p>{children}</p>
    </button>
  )
}