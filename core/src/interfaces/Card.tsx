import * as React from 'react'

import { useComponents } from '../providers'

export interface CardProps {
  image: string,
  children: any
}

export function Card({ image, children }: CardProps) {
  const { CardAdapter } = useComponents()
  return (
    <CardAdapter image={image}>
      {children}
    </CardAdapter>
  )
}

/**
 * Sub components
 */
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

Card.Body = CardBody
Card.Footer = CardFooter
