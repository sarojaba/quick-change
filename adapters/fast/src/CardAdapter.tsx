import * as React from 'react'

import { CardProps } from '@quick-change/core'

import { FastCard } from './components'

/**
 * @see https://explore.fast.design/components/fast-card
 */
export function CardAdapter({ image, children }: CardProps) {  
  return (
    <FastCard>
      <img src={image} />
      <div style={{
        padding: '0 10px 10px',
        color: 'var(--neutral-foreground-rest)'
      }}>
        {children}
      </div>
    </FastCard>
  )
}