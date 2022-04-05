import * as React from 'react'

import { ContainerProps } from '../interfaces'

import styled from 'styled-components'

/**
 * @see 
 */
export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  
  return <Wrapper>{children}</Wrapper>
}