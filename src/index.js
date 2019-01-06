import React from 'react'
import parse from './parser'
import first from 'lodash/first'
import get from 'lodash/get'
import map from 'lodash/map'
import drop from 'lodash/drop'
import isString from 'lodash/isString'
import isArray from 'lodash/isArray'
import takeWhile from 'lodash/takeWhile'
import dropWhile from 'lodash/dropWhile'

const InputArea = () =>
  <input/>

const isFormulaFrac = (el) => get(el, 1) == 'frac'
const isFormulaCursor = (el) => first(el) == 'C'
const isFormulaInput = (el) => first(el) == 'F'
const isFormulaSeparator = (el) => first(el) == 'I'
const isFormulaSymbol = (el) => isString(get(el, 1))
const isFormulaArray = (el) => isArray(first(el))

const renderFrac = (el) => {
  const children = drop(el, 2)
  const numerator = takeWhile(children, ch => isFormulaSeparator(ch))
  const denumerator = dropWhile(children, ch => isFormulaSeparator(ch))
  return <span>
    <span>{renderTree(numerator)}</span>
    <span>{renderTree(denumerator)}</span>
  </span>
}

const renderCursor = () => null
const renderInput = () => null
const renderSymbol = (el) => <span>{get(el, 1)}</span>

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
  return <>
    <InputArea/>
    <FormulaTree tree={parse("2/3/4")} />
  </>
}

export default Formulate
