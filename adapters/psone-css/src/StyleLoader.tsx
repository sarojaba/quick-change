import React, { Fragment } from 'react'

export function StyleLoader({ theme, children }) {
  return <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/98mprice/PSone.css@master/PSone.min.css"
    />

    {children}
  </>
}