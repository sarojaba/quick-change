import * as React from 'react'

import { useComponents } from '../providers'

export interface CardBodyProps {
  title: string,
  thumbnail: string,
  children: any
}

export function CardBody({ title, thumbnail, children }: CardBodyProps) {
  const { CardBodyAdapter } = useComponents()
  return (
    <CardBodyAdapter title={title} thumbnail={thumbnail}>
      {children}
    </CardBodyAdapter>
  )
}
