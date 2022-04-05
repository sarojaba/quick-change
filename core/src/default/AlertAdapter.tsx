import * as React from 'react'

import { AlertProps } from '../interfaces'

/**
 * @see 
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <div>{title}</div>
  )
}