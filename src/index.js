import React from 'react'
import parse from './parser'
import first from 'lodash/first'
import omit from 'lodash/omit'
import merge from 'lodash/merge'
import get from 'lodash/get'
import map from 'lodash/map'
import take from 'lodash/take'
import drop from 'lodash/drop'
import isString from 'lodash/isString'
import isArray from 'lodash/isArray'
import concat from 'lodash/concat'
import reduce from 'lodash/reduce'
import initial from 'lodash/initial'
import last from 'lodash/last'
import isEqual from 'lodash/isEqual'
import styled from 'styled-components'

const splitBy = (col, pred) => reduce(col, (m, e) => pred(e)
  ? concat(m, [[]])
  : concat(initial(m), [concat(last(m), [e])])
, [[]])

export const FormulateContext = React.createContext()

const SEPARATOR = ['I']
const CURSOR = ['C']
const FORMULAINPUT = ['F']

const InputArea = ({onFocus}) =>
  <input onFocus={onFocus}/>

const isFormulaFrac = (el) => get(el, 1) == 'frac'
const isFormulaCursor = (el) => isEqual(el, CURSOR)
const isFormulaInput = (el) => isEqual(el, FORMULAINPUT)
const isFormulaSeparator = (el) => isEqual(el, SEPARATOR)
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

const FormulaTree = ({tree}) => {
  const evaluatedTree = evalTree(tree, renderTree)
  return <div>
    {evaluatedTree}
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

  onFocus = () => {
    const tree = get(this.state, 'tree')
    this.setState({
      tree: concat(tree, [CURSOR])
    })
  }

  render() {
    return <FormulateContext.Provider value={{updateRefs: this.updateRefs}}>
      <InputArea onFocus={this.onFocus} />
      <FormulaTree tree={this.state.tree} />
    </FormulateContext.Provider>
  }
}

export default Formulate

//Tree traversal
const evalTree = (tree, applyTree) => {
  switch (true) {
    case isFormulaArray(tree) : return evalArray(tree, applyTree)
    case isFormulaSeparator(tree) : return evalSeparator(tree, applyTree)
    case isFormulaFrac(tree) : return evalFrac(tree, applyTree)
    case isFormulaCursor(tree) : return evalCursor(tree, applyTree)
    case isFormulaInput(tree) : return evalInput(tree, applyTree)
    case isFormulaSymbol(tree) : return evalSymbol(tree, applyTree)
    default: return null
  }
}

const evalArray = (tree, applyTree) =>
  map(tree, el => evalTree(el, applyTree))

const evalSeparator = (tree) =>
  tree

const evalFrac = (tree, applyTree) => {
  const base = take(tree, 2)
  const children = splitBy(drop(tree, 2), isFormulaSeparator)
  const numerator = evalTree(get(children, 0), applyTree)
  const denumerator = evalTree(get(children, 1), applyTree)
  return applyTree(concat(base, numerator, [SEPARATOR], denumerator))
}

const evalCursor = (tree, applyTree) =>
  applyTree(tree)

const evalInput = (tree) =>
  tree

const evalSymbol = (tree, applyTree) =>
  applyTree(tree)


// Rendering
const renderTree = el => {
  switch (true) {
    case isFormulaFrac(el) : return renderFrac(el)
    case isFormulaCursor(el) : return renderCursor(el)
    case isFormulaSymbol(el) : return renderSymbol(el)
    default: return el
  }
}

const renderFrac = (el) => {
  const children = splitBy(drop(el, 2), isFormulaSeparator)
  const numerator = get(children, 0)
  const denumerator = get(children, 1)
  return <FormulateContext.Consumer key={first(el)}>
    {({updateRefs}) => (
      <FracStyled
        ref={(elref) => updateRefs(first(el), elref)}
      >
        <NumeratorStyled>{numerator}</NumeratorStyled>
        <DenumeratorStyled>{denumerator}</DenumeratorStyled>
      </FracStyled>)}
  </FormulateContext.Consumer>
}

const renderCursor = (el) => <FormulateContext.Consumer key={first(el)}>
  {({updateRefs}) => (
    <span
      ref={(elref) => updateRefs(first(el), elref)}
    >|</span>)}
</FormulateContext.Consumer>

const renderSymbol = (el) => <FormulateContext.Consumer key={first(el)}>
  {({updateRefs}) => (
    <span
      ref={(elref) => updateRefs(first(el), elref)}
    >{get(el, 1)}</span>)}
</FormulateContext.Consumer>
