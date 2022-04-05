import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import {
  EuiButton,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiCodeBlock,
  EuiSpacer,
} from '@elastic/eui'

/**
 * @see https://elastic.github.io/eui/#/layout/modal
 */
export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <EuiModal onClose={onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <h1>{title}</h1>
        </EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        {children}
      </EuiModalBody>
    </EuiModal>
  )
}