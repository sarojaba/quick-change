import * as React from 'react'

import { CardBodyProps } from '@quick-change/core'

import { StyledThumbnail, StyledBody } from 'baseui/card'

export function CardBodyAdapter({ title, thumbnail, children }: CardBodyProps) {
  return <>
    {thumbnail ? <StyledThumbnail src={thumbnail} /> : null}
    <StyledBody>{children}</StyledBody>
  </>
}