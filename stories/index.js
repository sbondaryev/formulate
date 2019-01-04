import React from 'react'
import { storiesOf } from '@storybook/react'
import parse from '../src'

storiesOf('Button', module)
  .add('with text', () => {
    console.log(parse("foo\n"))
    return <div>test</div>
  })
