import * as React from 'react'

import { useComponents } from '../providers'

export interface AvatarGroupProps {
  children: any
}

export function AvatarGroup(props: AvatarGroupProps) {
  const { AvatarGroupAdapter } = useComponents()
  return <AvatarGroupAdapter {...props} />
}
