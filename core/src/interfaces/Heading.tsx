import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  level: PropTypes.number,
  align: PropTypes.any,
  children: PropTypes.string
}

const defaultProps = {
  level: 1,
  children: ''
}

export type HeadingProps = PropsType<typeof propTypes, typeof defaultProps>

export function Heading({ level, align, children }: HeadingProps) {
  const { HeadingAdapter } = useComponents()

  return (
    <HeadingAdapter level={ level } align={ align }>{ children }</HeadingAdapter>
  )
}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps
