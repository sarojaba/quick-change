import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  return (
    <ul className="tabs" data-tabs id="example-tabs">{ children }</ul>
  )
}