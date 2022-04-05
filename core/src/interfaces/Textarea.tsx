import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

const defaultProps = {
  name: undefined,
  label: undefined,
  value: undefined,
  placeholder: undefined,
  message: undefined,
  rows: undefined,
  disabled: false,
  onChange: undefined
}

export type TextareaProps = PropsType<typeof propTypes, typeof defaultProps>

export function Textarea({ name, label, value, placeholder, message, rows, disabled, onChange }: TextareaProps) {
  const { TextareaAdapter } = useComponents()
  return (
    <TextareaAdapter
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      message={message}
      rows={rows}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

Textarea.propTypes = propTypes
Textarea.defaultProps = defaultProps
