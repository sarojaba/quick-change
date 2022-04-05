import React, { Fragment } from 'react'

import { RadioGroupProps } from '@quick-change/core'

export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return <>
    <div className='direction-column'>
      {children}
    </div>

    <style jsx="true">{`
      .direction-column {
        display: flex;
        flex-direction: column
      }
    `}</style>
  </>
}