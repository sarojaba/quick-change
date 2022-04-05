import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

import { Select } from '@contentful/f36-components'

/**
 * @see https://f36.contentful.com/components/select
 */
export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <Select.Option value={value}>
      {children}
    </Select.Option>
  )
}