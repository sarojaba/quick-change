import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { WiredCard } from 'react-wired-elements'

/**
 * @see https://react-wired-elements.netlify.app/?path=/story/wiredcard--default
 */
export function CardAdapter({ image, children }: CardProps) {
  return (
    <WiredCard>
      <img src={image} />
      {/* <h4>{title}</h4> */}
      <p>{children}</p>
    </WiredCard>
  )
}