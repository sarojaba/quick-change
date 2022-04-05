import * as React from 'react'

import { TabProps } from '@quick-change/core'

import { Tabs, Box, Text } from '@sproutsocial/racine'

/**
 * @see https://seeds.sproutsocial.com/components/tabs
 */
export function TabAdapter({ id, title, href, active, disabled, children }: TabProps) {
  return (
    <Tabs.Button id={id}>
      <Box display='flex' alignItems='center'>
        <Text size='300' weight='600'>{children}</Text>
      </Box>
    </Tabs.Button>
  )
}
