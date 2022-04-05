import * as React from 'react'

export function MediaLeft({ children }) {

  return children
    ? <div className="media-left">{children}</div>
    : children
}