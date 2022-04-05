import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { DuetFieldset as Fieldset } from '@duetds/react'

/**
 * @see https://www.duetds.com/components/fieldset/
 */
export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <Fieldset label={label}>
      {children}
    </Fieldset>
  )
}