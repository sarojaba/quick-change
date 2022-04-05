import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {
  children: undefined
}

export type BlockquoteProps = PropsType<typeof propTypes, typeof defaultProps>

export function Blockquote({ children }: BlockquoteProps) {
  const { BlockquoteAdapter } = useComponents()

  return (
    <BlockquoteAdapter>{children}</BlockquoteAdapter>
  )
}

Blockquote.propTypes = propTypes
Blockquote.defaultProps = defaultProps
