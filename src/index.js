import React from 'react'
import parse from './parser'

const InputArea = () =>
  <input/>

const Formulate = () => {
  console.log(JSON.stringify(parse("2/3/4")))
  return <>
    <InputArea/>
  </>
}

export default Formulate
