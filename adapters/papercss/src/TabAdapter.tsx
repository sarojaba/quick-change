import React, { Fragment } from 'react'

import { TabProps } from '@quick-change/core'

export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return <>
    <input type="radio"
      id={name} name={name}
      checked
    />
    <label htmlFor={name}>{children}</label>
  </>
}