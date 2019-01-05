import React from 'react'
import { storiesOf } from '@storybook/react'
import parse from '../src'

storiesOf('Button', module)
  .add('with text', () => {
    console.log(parse("2/3/4"))
    return <div>test</div>
  })
