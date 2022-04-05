import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node
}

const defaultProps = {
  onSubmit: undefined,
  children: undefined
}

export type FormProps = PropsType<typeof propTypes, typeof defaultProps>

export function Form({ onSubmit, children }: FormProps) {
  const { FormAdapter, FormItemAdapter } = useComponents()

  const newChildren = React.Children.map(children, child => {
    return (
      <FormItemAdapter>
        {child}
      </FormItemAdapter>
    )
  })
  
  return (
    <FormAdapter onSubmit={onSubmit}>
      {newChildren}
    </FormAdapter>
  )
}

Form.propTypes = propTypes
Form.defaultProps = defaultProps
