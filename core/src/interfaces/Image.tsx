import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fluid: PropTypes.bool,
  children: PropTypes.node
}

const defaultProps = {
  src: '',
  alt: '',
  width: undefined,
  height: undefined,
  fluid: false,
  children: undefined
}

export type ImageProps = PropsType<typeof propTypes, typeof defaultProps>

export function Image({ src, alt, width, height, fluid, children }: ImageProps) {

  const { ImageAdapter } = useComponents()

  return (
    <ImageAdapter
      src={ src }
      width={ width }
      height={ height }
      alt={ alt }
      fluid={ fluid }>
      { children }
    </ImageAdapter>
  )
}

Image.propTypes = propTypes
Image.defaultProps = defaultProps
