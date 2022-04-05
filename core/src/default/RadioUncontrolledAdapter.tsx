import * as React from 'react'

import { RadioUncontrolledProps } from '../interfaces'

import { RadioAdapter } from './RadioAdapter'

/**
 * @see 
 */
export function RadioUncontrolledAdapter({ label, defaultChecked, disabled, onChange }: RadioUncontrolledProps) {
  const [checkedState, setCheckedState] = React.useState(defaultChecked)

  return (
    <RadioAdapter
      name={undefined}
      label={label}
      value={undefined}
      checked={checkedState}
      disabled={disabled}
      onChange={() => {
        setCheckedState(!checkedState)
        onChange()
      }}
    />
  )
}