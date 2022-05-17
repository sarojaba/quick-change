import * as React from 'react'

import { useComponents } from '../providers'

export interface FooterProps {
  children: any
}

export function Footer({ children }: FooterProps) {
  const { FooterAdapter } = useComponents()
  return <FooterAdapter>{children}</FooterAdapter>
}
