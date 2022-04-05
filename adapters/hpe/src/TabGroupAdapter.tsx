import * as React from 'react'

import { TabGroupProps } from '@quick-change/core'

import { Tabs } from 'grommet'

export function TabGroupAdapter({ active, onChange, children }: TabGroupProps) {
  const [index, setIndex] = React.useState();
  const onActive = nextIndex => setIndex(nextIndex);

  return (
    <Tabs activeIndex={index} onActive={onActive}>{children}</Tabs>
  )
}