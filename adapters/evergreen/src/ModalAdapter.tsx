import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Dialog } from 'evergreen-ui'

/**
 * @see https://evergreen.segment.com/components/dialog
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Dialog
      isShown={open}
      title={title}
      onCloseComplete={onClose}
      hasFooter={false}
    >
      {children}
    </Dialog>
  )
}