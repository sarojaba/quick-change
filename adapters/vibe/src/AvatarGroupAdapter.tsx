import * as React from 'react'

import { AvatarGroupProps } from '@quick-change/core'

import styled from 'styled-components'

/**
 * @see https://style.monday.com/?path=/docs/media-avatar--multiplue-avatars
 */
export function AvatarGroupAdapter({ children }: AvatarGroupProps) {

  /**
   * @see https://github.com/mondaycom/monday-ui-react-core/blob/master/src/storybook/components/multiple-story-elements-wrapper/multiple-story-elements-wrapper.scss
   */
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    & > * {
      margin-right: -8px;
    }
  `
  return (
    <Wrapper className="monday-style-story-avatar_multiplue">
      {children}
    </Wrapper>
  )
}