import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <div className="tabs">
      <ul>{ children }</ul>
    </div>
  )
}