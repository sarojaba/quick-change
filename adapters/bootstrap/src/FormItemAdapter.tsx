import * as React from 'react'

import { Form } from 'react-bootstrap'

export function FormItemAdapter({ children }) {
  const { label } = React.Children.only(children).props

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      {children}
    </Form.Group>
  )
}