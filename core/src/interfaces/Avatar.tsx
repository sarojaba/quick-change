import * as React from 'react'

import { useComponents } from '../providers'

export interface AvatarProps {
  name: string,

  /** Source of image. URL format. */
  src: string,

  /** Size of image. */
  // size: oneOf(['small', 'medium', 'large']),
  size: any,

  /** Shape of image. */
  // shape: oneOf(['circle', 'square'])
  shape: any
}

export function Avatar(props: AvatarProps) {
  const { AvatarAdapter } = useComponents()
  return <AvatarAdapter {...props} />
}

/**
 * Sub components
 */
import { AvatarGroup } from './AvatarGroup'

Avatar.Group = AvatarGroup