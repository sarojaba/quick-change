import * as React from 'react'

import { ButtonGroupProps } from '@quick-change/core'

import { ButtonGroup } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/button-group
 */
export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return (
    <ButtonGroup>{children}</ButtonGroup>
  )
}