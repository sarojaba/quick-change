import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

const defaultProps = {
  label: '',
  defaultChecked: false,
  disabled: false,
  onChange: () => {}
}

export type CheckboxUncontrolledProps = PropsType<typeof propTypes, typeof defaultProps>

export function CheckboxUncontrolled({ label, defaultChecked, disabled, onChange }: CheckboxUncontrolledProps) {
  const { CheckboxUncontrolledAdapter } = useComponents()
  return (
    <CheckboxUncontrolledAdapter
      label={label}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

CheckboxUncontrolled.propTypes = propTypes
CheckboxUncontrolled.defaultProps = defaultProps
