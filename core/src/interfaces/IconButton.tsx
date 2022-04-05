import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  icon: PropTypes.oneOf([
    'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
    'info', 'success', 'warning', 'danger',
    'home'
  ]),
  disabled: PropTypes.bool
}

const defaultProps = {
  icon: undefined,
  disabled: false
}

export type IconButtonProps = PropsType<typeof propTypes, typeof defaultProps>

export function IconButton({ icon, disabled }: IconButtonProps) {
  const { IconButtonAdapter } = useComponents()
  return (
    <IconButtonAdapter icon={icon} disabled={disabled} />
  )
}

IconButton.propTypes = propTypes
IconButton.defaultProps = defaultProps
