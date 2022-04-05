import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents } from '../providers'

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

const defaultProps = {
  title: '',
  children: undefined
}

export type AccordionItemProps = PropsType<typeof propTypes, typeof defaultProps>

export function AccordionItem({ title, children }: AccordionItemProps) {
  const { AccordionItemAdapter } = useComponents()
  return (
    <AccordionItemAdapter title={title}>
      {children}
    </AccordionItemAdapter>
  )
}

AccordionItem.propTypes = propTypes
AccordionItem.defaultProps = defaultProps