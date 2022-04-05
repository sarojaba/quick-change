import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { ButtonGroup } from 'react-bootstrap'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return (
    <ButtonGroup vertical={vertical}>{children}</ButtonGroup>
  )
}