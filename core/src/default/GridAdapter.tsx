import * as React from 'react'

import { GridProps } from '../interfaces'

import styled from 'styled-components'

/**
 * @see 
 */
export function GridAdapter({ responsive, gapless, children }: GridProps) {
  const count = React.Children.toArray(children).length

  const Wrapper = styled.div`
    display: grid
    grid-template-columns: ${' 1fr'.repeat(count)}
  `

  return (
    <Wrapper>{children}</Wrapper>
  )
}
