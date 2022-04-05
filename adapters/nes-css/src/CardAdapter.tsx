import * as React from 'react'

import { CardProps } from '@quick-change/core'

import styled from 'styled-components'

export function CardAdapter({ image, children }: CardProps) {

  const Container = styled.div`
    margin-top: 2.5rem;
  `

  return (
    <Container className="nes-container with-title">
      <p className="title">zz</p>
      <div>{children}</div>
    </Container>
  )
}