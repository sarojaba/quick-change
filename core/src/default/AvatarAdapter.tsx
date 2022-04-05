import * as React from 'react'

import { AvatarProps } from '../interfaces'

/**
 * @see 
 */
export function AvatarAdapter({ name, src, size, shape }: AvatarProps) {
  return (
    <img src={src} />
  )
}