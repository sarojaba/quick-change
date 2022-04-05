import * as React from 'react'

import { useComponents } from '../providers'

export function Divider() {
  const { DividerAdapter } = useComponents()
  return <DividerAdapter />
}