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

export type AudioProps = PropsType<typeof propTypes, typeof defaultProps>

export function Audio(props: AudioProps) {
  const { AudioAdapter } = useComponents()
  return <AudioAdapter {...props} />
}

Audio.propTypes = propTypes
Audio.defaultProps = defaultProps