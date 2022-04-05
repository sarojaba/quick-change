import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: undefined
}

export type CardFooterProps = PropsType<typeof propTypes, typeof defaultProps>

export function CardFooter({ children }: CardFooterProps) {
  const { CardFooterAdapter } = useComponents()
  return (
    <CardFooterAdapter>{children}</CardFooterAdapter>
  )
}

CardFooter.propTypes = propTypes
CardFooter.defaultProps = defaultProps
