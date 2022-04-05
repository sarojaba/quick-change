import * as React from 'react'

import { AvatarGroupProps } from '@quick-change/core'

import { AvatarGroup } from 'gestalt'

export function AvatarGroupAdapter({ children }: AvatarGroupProps) {
  const collaborators = React.Children.map(children, child => {
    const { name, src } = child.props
    return { name, src }
  })
  return (
    <AvatarGroup
      accessibilityLabel={undefined}
      collaborators={collaborators}
    />
  )
}