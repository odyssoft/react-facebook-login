import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import FacebookLogin from './facebook-login'

import { FacebookLoginRenderProps } from './'

export default {
  title: 'Facebook Login Button',
  component: FacebookLogin,
} as ComponentMeta<typeof FacebookLogin>

const Template: ComponentStory<typeof FacebookLogin> = (args: any) => (
  <FacebookLogin
    appId={'1257990027970358'}
    onClick={(e: any) => {
      console.log({ clicked: e })
    }}
    callback={(d: any) => {
      console.log({ d })
    }}
    {...args}
  />
)

//  @ts-ignore
export const _FacebookLogin = () => <Template />

export const _FacebookLoginRender = () => (
  //  @ts-ignore
  <Template
    render={({
      isDisabled,
      isLoading,
      isSdkLoaded,
      ...rest
    }: FacebookLoginRenderProps) => (
      <div style={{ background: 'red' }} {...rest}>
        Click to login
      </div>
    )}
  />
)