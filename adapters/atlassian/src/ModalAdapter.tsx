import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import Modal, { ModalBody, ModalHeader, ModalTitle } from '@atlaskit/modal-dialog'

export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Modal>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  )
}