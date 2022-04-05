import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  image: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
}

const defaultProps = {
  image: '',
  children: []
}

export type CardProps = PropsType<typeof propTypes, typeof defaultProps>

export function Card({ image, children }: CardProps) {
  const { CardAdapter } = useComponents()
  return (
    <CardAdapter image={image}>
      {children}
    </CardAdapter>
  )
}

Card.propTypes = propTypes
Card.defaultProps = defaultProps

/**
 * Sub components
 */
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

Card.Body = CardBody
Card.Footer = CardFooter