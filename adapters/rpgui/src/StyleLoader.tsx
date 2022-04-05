import React, { Fragment } from 'react'

export function StyleLoader({ theme, children }) {
  const baseUrl = 'https://ronenness.github.io/RPGUI'

  return <>
    <link
      rel="stylesheet"
      type="text/css"
      href={`${baseUrl}/rpgui/rpgui.min.css`}
    />

	  <script src={`${baseUrl}/rpgui/rpgui.min.js`}></script>

    <div className="rpgui-content user-fixed">{ children }</div>

    <style jsx="true">{`
      .user-fixed {
        top: auto;
        position: relative;
      }
    `}</style>
  </>
}