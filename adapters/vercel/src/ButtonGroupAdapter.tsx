import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { ButtonGroup } from '@geist-ui/core'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return <ButtonGroup vertical={vertical}>{children}</ButtonGroup>
}