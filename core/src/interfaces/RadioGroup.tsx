import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node
}

const defaultProps = {
  name: undefined,
  label: undefined,
  value: undefined,
  inline: false,
  disabled: false,
  onChange: undefined,
  children: undefined
}

export type RadioGroupProps = PropsType<typeof propTypes, typeof defaultProps>

export function RadioGroup({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  const { RadioGroupAdapter } = useComponents()
  return (
    <RadioGroupAdapter
      name={name}
      label={label}
      value={value}
      inline={inline}
      disabled={disabled}
      onChange={onChange}
    >
      {children}
    </RadioGroupAdapter>
  )
}

RadioGroup.propTypes = propTypes
RadioGroup.defaultProps = defaultProps
