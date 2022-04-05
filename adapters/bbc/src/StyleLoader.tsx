import * as React from 'react'

import './index.css'

export function StyleLoader({ theme, children }) {

  return (
    <>
      <link
        rel="stylesheet"
        href="https://necolas.github.io/normalize.css/8.0.0/normalize.css"
      />
      {children}
    </>
  )
}