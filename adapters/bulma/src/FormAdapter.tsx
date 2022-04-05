import * as React from 'react'

import { FormProps } from '@quick-change/core'

export function FormAdapter({ onSubmit, children }: FormProps) {
  return <form>{children}</form>
}