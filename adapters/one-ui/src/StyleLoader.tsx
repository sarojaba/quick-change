import * as React from 'react'

export function StyleLoader({ theme, children }) {
  return <React.Fragment>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/samsunginternet/OneUI-Web/oui-css/oui.css" />
    
    {children}
  </React.Fragment>
}