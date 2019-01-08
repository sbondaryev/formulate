import React from 'react'
import parse from './parser'
import first from 'lodash/first'
import tail from 'lodash/tail'
import get from 'lodash/get'
import map from 'lodash/map'
import drop from 'lodash/drop'
import isString from 'lodash/isString'
import isArray from 'lodash/isArray'
import takeWhile from 'lodash/takeWhile'
import dropWhile from 'lodash/dropWhile'
import styled from 'styled-components'

export const FormulateContext = React.createContext()

const InputArea = () =>
  <input/>

const isFormulaFrac = (el) => get(el, 1) == 'frac'
const isFormulaCursor = (el) => first(el) == 'C'
const isFormulaInput = (el) => first(el) == 'F'
const isFormulaSeparator = (el) => first(el) == 'I'
const isFormulaSymbol = (el) => isString(get(el, 1))
const isFormulaArray = (el) => isArray(first(el))

const FracStyled = styled.span`
  display: inline-block;
  vertical-align: -0.5em;
`
const NumeratorStyled = styled.span`
  display: block;
`
const DenumeratorStyled = styled.span`
  display: block;
  border-top: 1px solid;
`

const renderFrac = (el) => {
  const children = drop(el, 2)
  const numerator = takeWhile(children, ch => !isFormulaSeparator(ch))
  const denumerator = tail(dropWhile(children, ch => !isFormulaSeparator(ch)))
  return <FracStyled key={first(el)}>
    <NumeratorStyled>{renderTree(numerator)}</NumeratorStyled>
    <DenumeratorStyled>{renderTree(denumerator)}</DenumeratorStyled>
  </FracStyled>
}

const renderCursor = () => null
const renderInput = () => null
const renderSymbol = (el) => <FormulateContext.Consumer>
  {({updateRefs}) => (
    <span onClick={()=>updateRefs(first(el))} key={first(el)}>{get(el, 1)}</span>)}
</FormulateContext.Consumer>


const renderArray = (el) => map(el, renderTree)

const renderTree = (el) => {
  console.log(JSON.stringify(el))
  switch (true) {
    case isFormulaFrac(el) : return renderFrac(el)
    case isFormulaCursor(el) : return renderCursor(el)
    case isFormulaInput(el) : return renderInput(el)
    case isFormulaSymbol(el) : return renderSymbol(el)
    case isFormulaArray(el) : return renderArray(el)
    default: return null
  }
}

const FormulaTree = ({tree}) => {
  return <div>
    {renderTree(tree)}
  </div>
}

const Formulate = () => {
  const updateRefs = ref => console.log('updateRefs', ref)

  return <FormulateContext.Provider value={{updateRefs}}>
    <InputArea/>
    <FormulaTree tree={parse("2/3/4")} />
  </FormulateContext.Provider>
}

export default Formulate
