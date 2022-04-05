import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  name: PropTypes.string,
  value: PropTypes.node,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

const defaultProps = {
  name: undefined,
  value: undefined,
  label: undefined,
  checked: false,
  disabled: false,
  onChange: undefined
}

export type RadioProps = PropsType<typeof propTypes, typeof defaultProps>

export function Radio({ name, value, label, checked, disabled, onChange }: RadioProps) {
  const { RadioAdapter } = useComponents()
  return (
    <RadioAdapter
      name={name}
      value={value}
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

Radio.propTypes = propTypes
Radio.defaultProps = defaultProps

/**
 * Sub components
 */
import { RadioGroup } from './RadioGroup'
import { RadioUncontrolled } from './RadioUncontrolled'

Radio.Group = RadioGroup
Radio.Uncontrolled = RadioUncontrolled
