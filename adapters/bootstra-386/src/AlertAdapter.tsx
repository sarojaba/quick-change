import * as React from 'react'

import { AlertProps } from '@quick-change/core'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return <div className={`alert alert-${type}`}>{ children }</div>
}