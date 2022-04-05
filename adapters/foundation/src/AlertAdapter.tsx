import * as React from 'react'

import { AlertProps } from '@quick-change/core'

/**
 * @see https://get.foundation/sites/docs/callout.html
 */
export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <div className={`callout ${classNameByType(type)}`}>
      <h5>{title}</h5>
      <p>{children}</p>
      {
        onClose
          ? <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
              <span aria-hidden="true">&times;</span>
            </button>
          : null
      }
    </div>
  )
}

function classNameByType(type) {
  switch (type) {
    case 'danger':
      return 'alert'
    default:
      return type
  }
}