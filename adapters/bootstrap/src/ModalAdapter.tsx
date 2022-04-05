import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Modal } from 'react-bootstrap'

export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton={onClose}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal.Dialog>
  )
}