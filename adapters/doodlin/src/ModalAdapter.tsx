import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Modal } from 'doodlin-design-system'

/**
 * @see https://design.doodlin.co.kr/?path=/story/component-modal--default
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    open
      ? <Modal
          variant="default"
          header={{ Text: title }}
          closeBtn={onClose}
        >
          {children}
        </Modal>
      : null
  )
}