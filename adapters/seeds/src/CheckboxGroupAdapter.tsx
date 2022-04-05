import * as React from 'react'

import { CheckboxGroupProps } from '@quick-change/core'

import { Fieldset } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/checkbox#checkbox-grouping-with-fieldset
 */
export function CheckboxGroupAdapter({ label, inline, children, onChange }: CheckboxGroupProps) {
  return (
    <Fieldset label={label}>
      {children}
    </Fieldset>
  )
}