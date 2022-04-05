import * as React from 'react'

export function FormItemAdapter({ children }) {
  const { name, label } = React.Children.only(children).props

  return (
    <div className="nes-field">
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  )
}