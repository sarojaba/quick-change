import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  message: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
}

const defaultProps = {
  name: undefined,
  label: undefined,
  value: undefined,
  message: undefined,
  size: 'medium',
  disabled: false,
  readOnly: false,
  placeholder: '',
  onChange: undefined,
  onKeyDown: undefined
}

export type TextInputProps = PropsType<typeof propTypes, typeof defaultProps>

export function TextInput({ name, label, value, message, size, disabled, readOnly, placeholder, onChange, onKeyDown }: TextInputProps) {
  const { TextInputAdapter } = useComponents()
  return (
    <TextInputAdapter
      name={name}
      label={label}
      value={value}
      message={message}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

TextInput.propTypes = propTypes
TextInput.defaultProps = defaultProps