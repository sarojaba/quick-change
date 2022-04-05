import * as React from 'react'

import { ListItemProps } from '@quick-change/core'

import { ListItem } from 'govuk-react'

export function ListItemAdapter({ children }: ListItemProps) {
  return <ListItem>{children}</ListItem>
}