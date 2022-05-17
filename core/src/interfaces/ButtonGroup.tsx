import * as React from 'react'

import { useComponents } from '../providers'

export interface ButtonGroupProps {
  vertical?: boolean,
  children: any
}

export function ButtonGroup(props: ButtonGroupProps) {
  const { ButtonGroupAdapter } = useComponents()
  return <ButtonGroupAdapter {...props} />
}
