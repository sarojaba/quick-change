import * as React from 'react'

import { AlertProps } from '@quick-change/core'

import { CdsAlert, CdsAlertGroup } from '@cds/react/alert'

export function AlertAdapter({ title, type, icon, onClose, children }: AlertProps) {
  return (
    <CdsAlertGroup status="warning">
      <CdsAlert onCloseChange={() => this.setState({ show: false })} closable>Hello World</CdsAlert>
    </CdsAlertGroup>
  )
}