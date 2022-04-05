import * as React from 'react'

import { ListProps } from '@quick-change/core'

import { List } from '@wonderflow/react-components'

/**
 * @see https://design.wonderflow.ai/components/typography/list
 */
export function ListAdapter({ as, children }: ListProps) {
  return (
    <List>
      {children}
    </List>
  )
}