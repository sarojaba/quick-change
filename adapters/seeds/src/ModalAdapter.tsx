import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Modal, Text } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/modal
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Modal
      isOpen={open}
      onClose={onClose}
    >
      <Modal.Header
        title={title}
      />

      <Modal.Content>
        <Text fontSize={300} color="text.body">
          {children}
        </Text>
      </Modal.Content>
    </Modal>
  )
}