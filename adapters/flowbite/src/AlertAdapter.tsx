import * as React from 'react'

import { AlertProps } from '@quick-change/core'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <div
      role="alert"
      className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800">
      {children}
    </div>
  )
}