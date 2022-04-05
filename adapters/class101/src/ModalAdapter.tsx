import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Modal } from '@class101/ui'

/**
 * @see https://ui.class101.dev/overlays/modal
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Modal
      opened={open}
      title={title}
      onClose={onClose}
    >
      {children}
    </Modal>
  )
}