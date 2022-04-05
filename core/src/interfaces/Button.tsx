import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  icon: PropTypes.string,
  type: PropTypes.oneOf(['default', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'danger']),
  shape: PropTypes.oneOf(['fill', 'outline', 'clear']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  value: PropTypes.any,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
}

const defaultProps = {
  icon: undefined,
  type: 'default',
  shape: 'fill',
  size: 'medium',
  value: undefined,
  disabled: false,
  block: false,
  onClick: undefined,
  children: undefined
}

export type ButtonProps = PropsType<typeof propTypes, typeof defaultProps>

export function Button(props: ButtonProps) {
  const { ButtonAdapter } = useComponents()
  return <ButtonAdapter {...props} />
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

/**
 * Sub components
 */
import { ButtonGroup } from './ButtonGroup'

Button.Group = ButtonGroup
