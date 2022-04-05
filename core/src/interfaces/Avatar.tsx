import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  name: PropTypes.string,

  /**
   * Source of image. URL format.
   */
  src: PropTypes.string.isRequired,

  /** Size of image. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Shape of image. */
  shape: PropTypes.oneOf(['circle', 'square'])
}

const defaultProps = {
  name: '',
  src: '',
  size: 'medium',
  shape: 'circle'
}

export type AvatarProps = PropsType<typeof propTypes, typeof defaultProps>

export function Avatar(props: AvatarProps) {
  const { AvatarAdapter } = useComponents()
  return <AvatarAdapter {...props} />
}

Avatar.propTypes = propTypes
Avatar.defaultProps = defaultProps

/**
 * Sub components
 */
import { AvatarGroup } from './AvatarGroup'

Avatar.Group = AvatarGroup