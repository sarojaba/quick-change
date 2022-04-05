import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Modal } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/modal
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Modal onClose={onClose} isShown={open}>
      {() => (
        <>
          <Modal.Header title={title} onClose={onClose} />
          <Modal.Content>
            {children}
          </Modal.Content>
        </>
      )}
    </Modal>
  )
}