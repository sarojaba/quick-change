import * as React from 'react'

import { Form } from 'antd'

export function FormItemAdapter({ children }) {
  const { name, label } = React.Children.only(children).props

  return (
    <Form.Item
      name={name}
      label={label}
    >
      {children}
    </Form.Item>
  )
}