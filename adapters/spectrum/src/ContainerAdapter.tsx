import * as React from 'react'

import { ContainerProps } from '@quick-change/core'

import { View } from '@adobe/react-spectrum'

export function ContainerAdapter({ breakpoint, align, children }: ContainerProps) {
  return (
    <View>{children}</View>
  )
}