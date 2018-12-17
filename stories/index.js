import React from 'react'
import { storiesOf } from '@storybook/react'
import { parse } from '../src/parser'

storiesOf('Button', module)
  .add('with text', () => {
    console.log(parse("100+1\n"))
    return <div>test</div>
  })
