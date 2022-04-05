import * as React from 'react'

export function RadioAdapter({ name, value, label, checked, disabled, children }) {
  const props = {
    name,
    value,
    checked,
    disabled
  }

  // Workaround: add margin
  if (children) {
    props.style = {marginRight: '1ch'}
  }

  return (
    <label className="radio" disabled={ disabled } htmlFor={name}>
      <input type="radio" id={name} {...props} />
      { label }
    </label>
  )
}