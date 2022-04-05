import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  children: PropTypes.element
}

const defaultProps = {
  children: []
}

export type AvatarGroupProps = PropsType<typeof propTypes, typeof defaultProps>

export function AvatarGroup(props: AvatarGroupProps) {
  const { AvatarGroupAdapter } = useComponents()
  return <AvatarGroupAdapter {...props} />
}

AvatarGroup.propTypes = propTypes
AvatarGroup.defaultProps = defaultProps
