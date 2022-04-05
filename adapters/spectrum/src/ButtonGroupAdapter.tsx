import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { ButtonGroup } from '@adobe/react-spectrum'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  const props = {}
  if (vertical) {
    props.orientation = 'vertical'
  }
  return <ButtonGroup {...props}>{children}</ButtonGroup>
}