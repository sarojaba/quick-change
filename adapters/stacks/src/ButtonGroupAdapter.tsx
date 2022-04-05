import React, { Children } from 'react'

import { ButtonGroupProps } from '@quick-change/core'

export function ButtonGroupAdapter({ vertical, children }: ButtonGroupProps) {
  return vertical
    ? <div className="d-flex gs4 fd-column">{
        Children.map(children, child => {
          return React.cloneElement(child, { className: 'flex--item ' + child.props.className })
        })
      }</div>
    : <div className="s-btn-group">{children}</div>
}