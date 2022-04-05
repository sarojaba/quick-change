import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { ButtonGroup } from 'baseui/button-group'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return <ButtonGroup>{children}</ButtonGroup>
}