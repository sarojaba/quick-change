import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { DialogContentContainer } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/popover-dialogcontentcontainer--overview
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <DialogContentContainer>
      {children}
    </DialogContentContainer>
  )
}