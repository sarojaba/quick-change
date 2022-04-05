import * as React from 'react'

export function eliminateFragment(children: any) {

  if (children === undefined) {
    return children
  }

  const child = Array.isArray(children)
    ? children[0]
    : children

  if (child.type !== React.Fragment) {
    return children
  }

  return child.props.children
}

export function calculateRemainEqualWidth(children: any) {
  let remainSectionCount = 12
  let noSizeItemCount = 0

  React.Children.forEach(children, child => {
    const { size } = child.props

    if (size === undefined) {
      noSizeItemCount++      
    } else {
      remainSectionCount -= size
    }
  })
  
  return remainSectionCount / noSizeItemCount
}