import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
}

const defaultProps = {
  value: '',
  label: undefined,
  placeholder: '',
  size: 'medium',
  disabled: false,
  readOnly: false,
  onChange: undefined,
  onKeyDown: undefined
}

export type PasswordInputProps = PropsType<typeof propTypes, typeof defaultProps>

export function PasswordInput({ value, label, placeholder, size, disabled, readOnly, onChange, onKeyDown }: PasswordInputProps) {

  const { PasswordInputAdapter } = useComponents()

  return (
    <PasswordInputAdapter
      value={value}
      label={label}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

PasswordInput.propTypes = propTypes
PasswordInput.defaultProps = defaultProps
