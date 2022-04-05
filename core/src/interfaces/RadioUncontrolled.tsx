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
  onChange: undefined
}

export type RadioUncontrolledProps = PropsType<typeof propTypes, typeof defaultProps>

export function RadioUncontrolled({ label, defaultChecked, disabled, onChange }: RadioUncontrolledProps) {
  const { RadioUncontrolledAdapter } = useComponents()
  return (
    <RadioUncontrolledAdapter
      label={label}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

RadioUncontrolled.propTypes = propTypes
RadioUncontrolled.defaultProps = defaultProps
