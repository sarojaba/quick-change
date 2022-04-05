import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  text: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  children: PropTypes.node
}

const defaultProps = {
  text: '',
  position: 'top',
  children: undefined
}

export type TooltipProps = PropsType<typeof propTypes, typeof defaultProps>

export function Tooltip({ text, position, children }: TooltipProps) {
  const { TooltipAdapter } = useComponents()
  return (
    <TooltipAdapter text={text} position={position}>
      {children}
    </TooltipAdapter>
  )
}

Tooltip.propTypes = propTypes
Tooltip.defaultProps = defaultProps