import * as React from 'react'

import { Label } from 'web-toolkit'

/**
 * @see https://romgrk.github.io/web-toolkit/docs/component/label
 */
export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return <>
    <Label>{label}</Label>
    {children}
  </>
}