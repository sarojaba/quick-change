import * as React from 'react'

import { ModalProps } from '@quick-change/core'

import { Modal } from 'antd'

export function ModalAdapter({ title, open, onClose, children }: ModalProps) {
  return (
    <Modal title={title} visible></Modal>
  )
}