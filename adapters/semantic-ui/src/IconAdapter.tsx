import * as React from 'react'

import { IconProps } from '@quick-change/core'

import { Icon } from 'semantic-ui-react'

export function IconAdapter({ name, type, size }: IconProps) {
  return (
    <Icon name={name} size={size} />
  )
}