import React from 'react'

import {
  DesignSystemProvider,
  Container,
  Heading,
  Link,
  RadioGroup,
  Radio,
  Grid,
  Code,
  Button
} from '@quick-change/core'

import * as Antd from '@quick-change/antd'
// import * as Atlassian from '@quick-change/atlassian'
import * as Bootstrap from '@quick-change/bootstrap'

function App() {
  const catalog = {
    'antd': Antd,
    // 'atlassian': Atlassian,
    'bootstrap': Bootstrap
  }

  const [designSystem, setDesignSystem] = React.useState('antd')

  return <>
    <DesignSystemProvider
      catalog={catalog}
      name={designSystem}
    >
      <Container>
        <Grid>
          <Grid.Item>
            <Heading level={1}>Quick Change</Heading>
            
            <Heading level={2}>Write once, Choose any style!</Heading>

            <RadioGroup
              value={designSystem}
              onChange={value => {
                console.log(value)
                setDesignSystem(value)
              }}
            >
              <Radio label="Ant Design" value="antd" />
              {/* <Radio label="Atlassian" value="atlassian" /> */}
              {/* <Radio label="Base Web" value="base-web" /> */}
              <Radio label="Bootstrap" value="bootstrap" />
            </RadioGroup>

            <Link>Storybook</Link>
          </Grid.Item>
          <Grid.Item>
            <Code>{`
              <DesignSystemProvider
                catalog={catalog}
                name={designSystem}
              >
                <Container>
                </Container>
              </DesignSystemProvider>
            `}
            </Code>
          </Grid.Item>
        </Grid>
      </Container>
    </DesignSystemProvider>
    <DesignSystemProvider
      catalog={catalog}
      name="antd"
    >
      <Button>Hello</Button>
    </DesignSystemProvider>
    {/* <DesignSystemProvider
      catalog={catalog}
      name="atlassian"
    >
      <Button>Hello</Button>
    </DesignSystemProvider> */}
    <DesignSystemProvider
      catalog={catalog}
      name="bootstrap"
    >
      <Button>Hello</Button>
    </DesignSystemProvider>
  </>
}

export default App
