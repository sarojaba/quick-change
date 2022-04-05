import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { DuetModal as Modal } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/modal/
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Modal
      heading={title}
      active={open}
      onDuetClose={onClose}
    >
      {children}
    </Modal>
  )
}