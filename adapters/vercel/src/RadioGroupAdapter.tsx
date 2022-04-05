import * as React from 'react'

import { Radio } from '@geist-ui/core'

export function RadioGroupAdapter({ name, value, children }) {
  return (
    <Radio.Group>{children}</Radio.Group>
  )
}
