import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

/**
 * @see https://chakra-ui.com/docs/getting-started#set-up-provider
 * @param {*} param0 
 * @returns 
 */
export function StyleLoader({ theme, children }) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}