import * as React from 'react'
import * as PropTypes from 'prop-types'
import PropsType from 'props-type'

import { useComponents, ScopeProvider } from '../providers'

const propTypes = {
  multiple: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element)
}

const defaultProps = {
  multiple: false,
  children: []
}

export type AccordionProps = PropsType<typeof propTypes, typeof defaultProps>

export function Accordion({ multiple, children }: AccordionProps) {
  const { AccordionAdapter } = useComponents()
  return (
    <AccordionAdapter multiple={multiple}>
      <ScopeProvider scope="accordion">
        {children}
      </ScopeProvider>
    </AccordionAdapter>
  )
}

Accordion.propTypes = propTypes
Accordion.defaultProps = defaultProps

/**
 * Sub components
 */
import { AccordionItem } from './AccordionItem'

Accordion.Item = AccordionItem