import * as React from 'react'

import { useComponents } from '../providers'

export interface ModalProps {
  title: string,
  open: boolean,
  onClose: any,
  children: any
}

export function Modal({ title, open, onClose, children }: ModalProps) {
  const { ModalAdapter } = useComponents()
  return (
    <ModalAdapter title={title} open={open} onClose={onClose}>
      { children }
    </ModalAdapter>
  )
}
