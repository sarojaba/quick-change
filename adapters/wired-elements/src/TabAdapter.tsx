import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { WiredTab } from 'react-wired-elements'

export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <WiredTab>{children}</WiredTab>
  )
}
