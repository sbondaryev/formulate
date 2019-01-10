import React from 'react'
import parse from './parser'
import first from 'lodash/first'
import omit from 'lodash/omit'
import tail from 'lodash/tail'
import merge from 'lodash/merge'
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
  return <FormulateContext.Consumer key={first(el)}>
    {({updateRefs}) => (
      <FracStyled
        ref={(elref) => updateRefs(first(el), elref)}
      >
        <NumeratorStyled>{renderTree(numerator)}</NumeratorStyled>
        <DenumeratorStyled>{renderTree(denumerator)}</DenumeratorStyled>
      </FracStyled>)}
  </FormulateContext.Consumer>
}

const renderCursor = () => null
const renderInput = () => null
const renderSymbol = (el) => <FormulateContext.Consumer key={first(el)}>
  {({updateRefs}) => (
    <span
      ref={(elref) => updateRefs(first(el), elref)}
    >{get(el, 1)}</span>)}
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

class Formulate extends React.Component {
  refs = {}
  constructor(props) {
    super(props)
    this.state = {
      tree: parse("2/3/4")
    }
  }

  updateRefs = (id, elref) => {
    this.refs = elref
      ? merge({}, this.refs, {[id]:elref})
      : omit(this.refs, id)
  }

  render() {
    return <FormulateContext.Provider value={{updateRefs: this.updateRefs}}>
      <InputArea/>
      <FormulaTree tree={this.state.tree} />
    </FormulateContext.Provider>
  }
}

export default Formulate
