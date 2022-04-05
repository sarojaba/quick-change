import * as React from 'react'

import styled from 'styled-components'

import styles from '@stackoverflow/stacks/dist/css/stacks.min.css'

export function StyleLoader({ theme, children }) {
  const Wrapper = styled.div`
    ${styles}
  `

  return <Wrapper>{children}</Wrapper>
}