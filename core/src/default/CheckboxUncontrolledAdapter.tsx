import * as React from 'react'

import { CheckboxUncontrolledProps } from '../interfaces'

import { CheckboxAdapter } from './CheckboxAdapter'

/**
 * @see 
 */
export function CheckboxUncontrolledAdapter({ label, defaultChecked, disabled, onChange }: CheckboxUncontrolledProps) {
  const [checkedState, setCheckedState] = React.useState(defaultChecked)

  return (
    <CheckboxAdapter
      label={label}
      checked={checkedState}
      disabled={disabled}
      onChange={() => {
        setCheckedState(!checkedState)
        onChange()
      }}
    />
  )
}