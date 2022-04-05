import * as React from 'react'

import { ModalProps } from '../interfaces'

/**
 * @see 
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  )
}