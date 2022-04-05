import * as React from 'react'

import { RadioGroupProps } from '@quick-change/core'

import { Radio, Space } from 'antd'

/**
 * @see https://ant.design/components/radio/
 */
export function RadioGroupAdapter({ name, label, value, inline, disabled, onChange, children }: RadioGroupProps) {
  return (
    <Radio.Group
      value={value}
      disabled={disabled}
      onChange={e => onChange(e.target.value)}
    >
      {
        inline
          ? children
          : <Space direction="vertical">{children}</Space>
      }
    </Radio.Group>
  )
}