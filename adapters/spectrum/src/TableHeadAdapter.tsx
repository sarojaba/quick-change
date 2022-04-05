import * as React from 'react'

import { TableHeadProps } from '@quick-change/core'

import { TableHeader } from '@adobe/react-spectrum'

export function TableHeadAdapter({ children }: TableHeadProps) {
  return <TableHeader>{children}</TableHeader>
}