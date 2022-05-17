import * as React from 'react'

import { useComponents } from '../providers'

export interface HeaderProps {
  title?: string,
  children?: any
}

export function Header({ title, children }: HeaderProps) {
  const { HeaderAdapter } = useComponents()
  return <HeaderAdapter title={title}>{children}</HeaderAdapter>
}
