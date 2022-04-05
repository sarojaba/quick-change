import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  children: PropTypes.node
}

const defaultProps = {
  title: null,
  thumbnail: '',
  children: undefined
}

export type CardBodyProps = PropsType<typeof propTypes, typeof defaultProps>

export function CardBody({ title, thumbnail, children }: CardBodyProps) {
  const { CardBodyAdapter } = useComponents()
  return (
    <CardBodyAdapter title={title} thumbnail={thumbnail}>
      {children}
    </CardBodyAdapter>
  )
}

CardBody.propTypes = propTypes
CardBody.defaultProps = defaultProps
