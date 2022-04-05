import React, { Fragment } from 'react'

export function StyleLoader({ theme, children }) {
  return <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Dalgona/neodgm-webfont@1.521/neodgm/style.css" />
    <link rel="stylesheet" href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" />
    <link href="https://nostalgic-css.github.io/NES.css/style.css" rel="stylesheet" />

    <div className="font">{ children }</div>

    <style jsx="true">{`
      html, body, pre, code, kbd, samp, .font {
        font-family: 'NeoDunggeunmo';
      }
    `}</style>
  </>
}