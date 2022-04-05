import * as React from 'react'

import { ListItemProps } from '@quick-change/core'

import { List } from '@instructure/ui'

/**
 * @see https://instructure.design/#List
 */
export function ListItemAdapter({ children }: ListItemProps) {
  return (
    <List.Item>{children}</List.Item>
  )
}