import * as React from 'react'

function Wrap({ Component, children }) {
  return React.Children.map(children, child =>
    <Component>{ child }</Component>
  )
}

function Control({ children }) {
  return <div className="control">{ children }</div>
}

export function Field({ align, children }) {
  return <div className="field has-addons">{
    children ? <Wrap Component={ Control }>{ children }</Wrap> : null
  }</div>
}