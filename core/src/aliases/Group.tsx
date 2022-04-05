import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import {
  Avatar,
  Button,
  Checkbox,
  Radio,
  Tab
} from '../interfaces'

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

const defaultProps = {
  children: []
}

export type GroupProps = PropsType<typeof propTypes, typeof defaultProps>

export function Group({ children }: GroupProps) {
  
  if (isSameType(children, Avatar)) {
    return (
      <Avatar.Group>{children}</Avatar.Group>
    )
  }

  if (isSameType(children, Button)) {
    return (
      <Button.Group>{children}</Button.Group>
    )
  }

  if (isSameType(children, Checkbox)) {
    return (
      <Checkbox.Group>{children}</Checkbox.Group>
    )
  }

  if (isSameType(children, Radio)) {
    return (
      <Radio.Group>{children}</Radio.Group>
    )
  }

  if (isSameType(children, Tab)) {
    return (
      <Tab.Group>{children}</Tab.Group>
    )
  }

  throw Error(`Every children should have same type: ${React.Children.map(children, child => child.type['name'])}`)
}

function isSameType(children: React.ReactNode | React.ReactNode[], type: (props: any) => JSX.Element) {
  return React.Children.toArray(children)
    .every(child => child['type'] === type)
}

Group.propTypes = propTypes
Group.defaultProps = defaultProps
