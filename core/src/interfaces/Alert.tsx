import * as React from 'react'

import { useComponents } from '../providers'

export interface AlertProps {
  title: string,
  // type: oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger']),
  type: any,
  icon: boolean,
  // onClose: func,
  onClose: any,
  children: any
}

export function Alert({ title, type, icon, onClose, children }: AlertProps) {
  const { AlertAdapter } = useComponents()
  return (
    <AlertAdapter title={title} type={type} icon={icon} onClose={onClose}>
      {children}
    </AlertAdapter>
  )
}
