import * as React from 'react'

import { useComponents } from '../providers'

export interface CardFooterProps {
  children: any
}

export function CardFooter({ children }: CardFooterProps) {
  const { CardFooterAdapter } = useComponents()
  return (
    <CardFooterAdapter>{children}</CardFooterAdapter>
  )
}
