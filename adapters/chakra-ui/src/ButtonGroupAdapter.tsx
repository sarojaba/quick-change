import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { ButtonGroup } from '@chakra-ui/react'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return <ButtonGroup>{children}</ButtonGroup>
}