import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { CloseButton, Heading, Modal } from '@instructure/ui'

/**
 * @see https://instructure.design/#Modal
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Modal
      label={undefined}
      open={open}
      onDismiss={onClose}
      shouldCloseOnDocumentClick
    >
      <Modal.Header>
        {
          onClose
            ? <CloseButton
                placement="end"
                offset="small"
                onClick={this.handleButtonClick}
                screenReaderLabel="Close"
              />
            : null
        }
        <Heading>{title}</Heading>
      </Modal.Header>
    </Modal>
  )
}