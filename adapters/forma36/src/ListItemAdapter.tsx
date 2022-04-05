import * as React from 'react'

import { ListItemProps } from '@quick-change/core'

import { List } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/list
 */
export function ListItemAdapter({ children }: ListItemProps) {
  return (
    <List.Item>{children}</List.Item>
  )
}