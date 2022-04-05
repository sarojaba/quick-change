import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  name: PropTypes.oneOf(['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'info', 'success', 'warning', 'danger', 'home']),
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger', undefined]),
  size: PropTypes.any
}

const defaultProps = {
  name: undefined,
  type: undefined,
  size: undefined
}

export type IconProps = PropsType<typeof propTypes, typeof defaultProps>

export function Icon({ name, type, size }: IconProps) {
  const { IconAdapter } = useComponents()
  return <IconAdapter name={name} type={type} size={size} />
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps
