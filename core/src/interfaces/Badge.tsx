import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger']),
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node
}

const defaultProps = {
  type: 'primary',
  count: 0,
  onClick: undefined,
  children: undefined
}

export type BadgeProps = PropsType<typeof propTypes, typeof defaultProps>

export function Badge(props: BadgeProps) {
  const { BadgeAdapter } = useComponents()
  return <BadgeAdapter {...props} />
}

Badge.propTypes = propTypes
Badge.defaultProps = defaultProps
