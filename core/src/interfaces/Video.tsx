import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  children: PropTypes.node
}

const defaultProps = {
  autoPlay: false,
  controls: false,
  children: undefined
}

export type VideoProps = PropsType<typeof propTypes, typeof defaultProps>

export function Video({ autoPlay, controls, children }: VideoProps) {
  const { VideoAdapter } = useComponents()
  return (
    <VideoAdapter autoPlay={autoPlay} controls={controls}>{children}</VideoAdapter>
  )
}

Video.propTypes = propTypes
Video.defaultProps = defaultProps