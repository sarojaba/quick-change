import * as React from 'react'

import { FormProps } from '../interfaces'

/**
 * @see https://developer.mozilla.org/ko/docs/Web/HTML/Element/form
 */
export function FormAdapter({ onSubmit, children }: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}