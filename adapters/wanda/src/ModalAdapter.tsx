import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Modal, OverlayContainer } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/dialogs/modal
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <OverlayContainer onClose={onClose}>
      {open && (
        <Modal>
          <Modal.Content title={title}>
            {children}
          </Modal.Content>
        </Modal>
      )}
    </OverlayContainer>
  )
}