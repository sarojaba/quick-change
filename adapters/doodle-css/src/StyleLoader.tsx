import * as React from 'react'

import styled from 'styled-components'

import 'doodle.css/doodle.css'

export function StyleLoader({ theme, children }) {

  const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Short+Stack&display=swap');

    body {
      font-family: 'Short Stack', cursive;
    }
  `

  return <Wrapper className="doodle">{children}</Wrapper>
}