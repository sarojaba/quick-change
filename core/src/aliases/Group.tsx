import * as React from 'react'

import {
  Avatar,
  Button,
  Checkbox,
  Radio,
  Tab
} from '../interfaces'

export interface GroupProps {
  children: Array<any>
}

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
