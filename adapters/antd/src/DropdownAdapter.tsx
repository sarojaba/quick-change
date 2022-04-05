import * as React from 'react'

import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

export function DropdownAdapter({ title, children }) {
  return (
    <Dropdown overlay={<Menu>{children}</Menu>}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {title} <DownOutlined />
      </a>
    </Dropdown>
  )
}

export function DropdownItemAdapter({ href, children }) {
  return (
    <Menu.Item>
      <a href={href}>{children}</a>
    </Menu.Item>
  )
}