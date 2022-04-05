import * as React from 'react'

export function StyleLoader({ theme, children }) {
  return <React.Fragment>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Press+Start+2P"
    />
    
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/omerimzali/uiterminal@master/uiterminal.min.css"
    />

    {children}
  </React.Fragment>
}