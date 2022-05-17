import * as React from 'react'

import { useComponents } from '../providers'

export interface TagProps {
  // type: oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger']),
  type: string,
  onClick: any,
  onClose: any,
  children: any
}

export function Tag(props: TagProps) {
  const { TagAdapter } = useComponents()
  return <TagAdapter {...props} />
}
