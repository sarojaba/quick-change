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

export type ContentProps = PropsType<typeof propTypes, typeof defaultProps>

export function Content({ children }: ContentProps) {
  const { ContentAdapter } = useComponents()
  return <ContentAdapter>{children}</ContentAdapter>
}

Content.propTypes = propTypes
Content.defaultProps = defaultProps