import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Modal } from '@geist-ui/core'

export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Modal visible={open}>
      <Modal.Title>{title}</Modal.Title>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  )
}