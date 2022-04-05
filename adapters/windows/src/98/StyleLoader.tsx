import * as React from 'react'

export function StyleLoader({ theme, children }) {
  return <React.Fragment>
    <link rel="stylesheet" href="https://unpkg.com/98.css" />
    
    {children}
  </React.Fragment>
}