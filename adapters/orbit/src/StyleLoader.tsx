import * as React from 'react'

/**
 * @see https://orbit.kiwi/getting-started/for-developers/
 */
export function StyleLoader({ theme, children }) {
  return <>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
      rel="stylesheet"
    />
  </>
}