import * as React from 'react'

import { useComponents } from '../providers'

export interface IconProps {
  // name: oneOf(['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'info', 'success', 'warning', 'danger', 'home']),
  name: any,
  // type: oneOf(['info', 'success', 'warning', 'danger', undefined]),
  type: any,
  size: any
}

export function Icon({ name, type, size }: IconProps) {
  const { IconAdapter } = useComponents()
  return <IconAdapter name={name} type={type} size={size} />
}
