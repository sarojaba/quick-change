/**
 * @see https://www.fast.design/docs/integrations/react/#using-the-components
 */

import * as React from 'react'

import { 
  provideFASTDesignSystem,
  fastAccordion,
  fastAccordionItem,
  fastBadge,
  fastButton,
  fastCard,
  fastDataGrid
} from '@microsoft/fast-components'

import { provideReactWrapper } from '@microsoft/fast-react-wrapper'

const { wrap } = provideReactWrapper(
  React, 
  provideFASTDesignSystem()
)

export const FastAccordion = wrap(fastAccordion())
export const FastAccordionItem = wrap(fastAccordionItem())
export const FastBadge = wrap(fastBadge())
export const FastButton = wrap(fastButton())
export const FastCard = wrap(fastCard())
export const FastDataGrid = wrap(fastDataGrid())
