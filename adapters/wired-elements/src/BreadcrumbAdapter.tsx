import * as React from 'react'

import { BreadcrumbProps, eliminateFragment } from '@quick-change/core'

import { WiredLink } from 'react-wired-elements'

export function BreadcrumbAdapter({ children }: BreadcrumbProps) {

  const newChildren = eliminateFragment(children)

  return (
    <nav>{joinChildren(newChildren, render, renderSeparator)}</nav>
  )
}

function render(item, index) {
  const { href, children } = item.props
  return href
    ? <WiredLink key={index} href={href}>{children}</WiredLink>
    : children
}

function renderSeparator(key) {
  return <span key={key}> / </span>
}

// https://gist.github.com/granmoe/274c299b792b039deecfb619753ea32c
function joinChildren(children, render, renderSeparator) {
  return children.reduce((result, child, index) => {
    if (index < children.length - 1) {
      return result.concat([render(child, index), renderSeparator(index + '-separator')])
    }

    return result.concat(render(child, index))
  }, [])
}