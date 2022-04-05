import * as React from 'react'

import { TextField as T } from 'monday-ui-react-core'

/**
 * @see https://style.monday.com/?path=/docs/inputs-textfield--overview
 */
export function TextField({ type, label, value, size, disabled, readOnly, placeholder, onChange, onKeyDown }) {
  return (
    <T
      type={type}
      title={label}
      placeholder={placeholder}
      value={value}
      size={sizeBySize(size)}
      readOnly={readOnly}
      disabled={disabled}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

function sizeBySize(size) {
  switch (size) {
    case 'small':
      return undefined
    case 'medium':
      return T.sizes.MEDIUM
    case 'large':
      return T.sizes.LARGE
    default:
      return T.sizes.MEDIUM
  }
}