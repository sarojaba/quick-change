import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { ButtonSet } from 'carbon-components-react'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return <ButtonSet>{children}</ButtonSet>
}