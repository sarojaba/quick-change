import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

const defaultProps = {
  label: '',
  checked: false,
  disabled: false,
  onChange: () => {}
}

export type CheckboxProps = PropsType<typeof propTypes, typeof defaultProps>

export function Checkbox({ label, checked, disabled, onChange }: CheckboxProps) {
  const { CheckboxAdapter } = useComponents()
  return (
    <CheckboxAdapter
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

/**
 * Sub components
 */

import { CheckboxGroup } from './CheckboxGroup'
import { CheckboxUncontrolled } from './CheckboxUncontrolled'

Checkbox.Group = CheckboxGroup
Checkbox.Uncontrolled = CheckboxUncontrolled
