import * as React from 'react'

import { SelectItemProps } from '@quick-change/core'

import { SelectOption } from '@momentum-ui/react'

/**
 * @see https://momentum.design/components/select
 */
export function SelectItemAdapter({ value, selected, children }: SelectItemProps) {
  return (
    <SelectOption value={value} label={children} />
  )
}