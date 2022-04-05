import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger']),
  icon: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}

const defaultProps = {
  title: '',
  type: 'default',
  icon: false,
  onClose: undefined,
  children: undefined
}

export type AlertProps = PropsType<typeof propTypes, typeof defaultProps>

export function Alert({ title, type, icon, onClose, children }: AlertProps) {
  const { AlertAdapter } = useComponents()
  return (
    <AlertAdapter title={title} type={type} icon={icon} onClose={onClose}>
      {children}
    </AlertAdapter>
  )
}

Alert.propTypes = propTypes
Alert.defaultProps = defaultProps
