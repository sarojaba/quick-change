import * as React from 'react'

import { Navbar } from 'rbx'

export function NavAdapter({ brand, href, as, children }) {
  return (
    <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>{children}</Navbar>
  )  
}
