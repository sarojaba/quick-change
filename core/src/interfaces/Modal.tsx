import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}

const defaultProps = {
  title: '',
  open: false,
  onClose: undefined,
  children: undefined
}

export type ModalProps = PropsType<typeof propTypes, typeof defaultProps>

export function Modal({ title, open, onClose, children }: ModalProps) {
  const { ModalAdapter } = useComponents()
  return (
    <ModalAdapter title={title} open={open} onClose={onClose}>
      { children }
    </ModalAdapter>
  )
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps
