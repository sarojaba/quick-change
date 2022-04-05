import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Dialog } from 'hds-react'

export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Dialog id={undefined} isOpen={open} aria-labelledby="" close={onClose}>
      <Dialog.Header
        id={undefined}
        title={title}
      />
      <Dialog.Content>{children}</Dialog.Content>
    </Dialog>
  )
}