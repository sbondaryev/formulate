import React from 'react'
import parse from './parser'
import omit from 'lodash/omit'
import merge from 'lodash/merge'
import get from 'lodash/get'
import flatMap from 'lodash/flatMap'
import isArray from 'lodash/isArray'
import mapValues from 'lodash/mapValues'
import compact from 'lodash/compact'
import styled from 'styled-components'
import uniqueId from 'lodash/uniqueId'
import {findRight, findLeft, findTop, findBottom, findOuter} from './position'
import InputContext from './input'

export const FormulateContext = React.createContext()

const CURSOR = {type: 'cursor'}
const INPUT = {type: 'input'}

const StyledInput = styled.input`
  color: red;
`

const isFrac = (el) => get(el, 'type') == 'frac'
const isCursor = (el) => get(el, 'type') == 'cursor'
const isInput = (el) => get(el, 'type') == 'input'
const isSymbol = (el) => get(el, 'type') == 'symbol'

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

const FormulaTree = ({tree, onClick}) => {
  const evaluatedTree = evalTree(tree, renderTree)
  return <FormulateContext.Consumer>
    {({updateRefs}) => (
      <div
        onClick={e => onClick([e.clientX, e.clientY])}
        ref={(elref) => updateRefs("frame", elref)}>
        {evaluatedTree}
      </div>)}
  </FormulateContext.Consumer>
}

const getRectanglesHash = (refs) =>
  mapValues(refs, el => {
    const r = el.getBoundingClientRect()
    return [r.top, r.right, r.bottom, r.left]
  })

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

  updateInputRef = ref => {
    this.inputref = ref
  }

  inputContext = content => {
    this.setState((state) => ({
      tree: removeInput(state.tree)
    }),
    () =>  {
      console.log(content)
    })
  }

  onBlur = () =>
    this.setState((state) => ({
      tree: removeCursor(get(state, 'tree'))
    }))

  onKeyDown = ({key}) => {
    switch(true) {
      case key=="Backspace": {
        const pos = findLeft(getRectanglesHash(this.refs))
        this.setState((state) => ({
          tree: backspaceCursor(state.tree, pos)
        }))
        break
      }
      case key=="ArrowRight": {
        const pos = findRight(getRectanglesHash(this.refs))
        this.setState((state) => ({
          tree: insertCursor(state.tree, pos)
        }))
        break
      }
      case key=="ArrowLeft": {
        const pos = findLeft(getRectanglesHash(this.refs))
        this.setState((state) => ({
          tree: insertCursor(state.tree, pos)
        }))
        break
      }
      case key=="ArrowUp": {
        const pos = findTop(getRectanglesHash(this.refs))
        this.setState((state) => ({
          tree: insertCursor(state.tree, pos)
        }))
        break
      }
      case key=="ArrowDown": {
        const pos = findBottom(getRectanglesHash(this.refs))
        this.setState((state) => ({
          tree: insertCursor(state.tree, pos)
        }))
        break
      }
      case /[1-9\+\-\*]/.test(key): {
        this.setState((state) => ({
          tree: insertElem(state.tree, key)
        }))
        break
      }
      case key=="\\": {
        this.setState((state) => ({
          tree: insertInput(state.tree)
        }))
        break
      }
    }
  }

  onClick = (point) => {
    const pos = findOuter(point, getRectanglesHash(this.refs))
    this.setState(state => ({
      tree: insertCursor(state.tree, pos)
    }), () => this.inputref.focus())
  }

  render() {
    return <FormulateContext.Provider value={{
      updateRefs: this.updateRefs,
      inputContext: this.inputContext
    }}>
      <StyledInput
        onBlur={this.onBlur}
        onKeyDown={this.onKeyDown}
        ref={this.updateInputRef}
      />
      <FormulaTree
        tree={this.state.tree}
        onClick={this.onClick}
      />
    </FormulateContext.Provider>
  }
}

export default Formulate

//Tree traversal
const evalTree = (tree, applyTree) => {
  switch (true) {
    case isArray(tree) : return evalArray(tree, applyTree)
    case isFrac(tree) : return evalFrac(tree, applyTree)
    case isCursor(tree) : return evalCursor(tree, applyTree)
    case isInput(tree) : return evalInput(tree, applyTree)
    case isSymbol(tree) : return evalSymbol(tree, applyTree)
    default: return null
  }
}

const evalArray = (tree, applyTree) =>
  compact(flatMap(tree, el => evalTree(el, applyTree)))

const evalFrac = (tree, applyTree) => {
  const numerator = evalTree(get(tree, 'numerator'), applyTree)
  const denumerator = evalTree(get(tree, 'denumerator'), applyTree)
  return applyTree({...tree, numerator, denumerator})
}

const evalCursor = (tree, applyTree) =>
  applyTree(tree)

const evalInput = (tree, applyTree) =>
  applyTree(tree)

const evalSymbol = (tree, applyTree) =>
  applyTree(tree)

// Rendering
const renderTree = el => {
  switch (true) {
    case isFrac(el) : return renderFrac(el)
    case isCursor(el) : return renderCursor(el)
    case isSymbol(el) : return renderSymbol(el)
    case isInput(el) : return renderInput(el)
    default: return el
  }
}

const renderFrac = (el) => {
  const id = get(el, 'id')
  const numerator = get(el, 'numerator')
  const denumerator = get(el, 'denumerator')
  return <FormulateContext.Consumer key={id}>
    {({updateRefs}) => (
      <FracStyled
        ref={(elref) => updateRefs(id, elref)}
      >
        <NumeratorStyled>{numerator}</NumeratorStyled>
        <DenumeratorStyled>{denumerator}</DenumeratorStyled>
      </FracStyled>)}
  </FormulateContext.Consumer>
}

const renderCursor = (el) => {
  const id = get(el, 'type')
  return <FormulateContext.Consumer key={id}>
    {({updateRefs}) => (
      <span
        ref={(elref) => updateRefs(id, elref)}
      >|</span>)}
  </FormulateContext.Consumer>
}

const renderSymbol = (el) => {
  const id = get(el, 'id')
  const value = get(el, 'value')
  return <FormulateContext.Consumer key={id}>
    {({updateRefs}) => (
      <span
        ref={(elref) => updateRefs(id, elref)}
      >{value}</span>)}
  </FormulateContext.Consumer>
}

const renderInput = (el) => {
  return <FormulateContext.Consumer  key={get(el, 'type')}>
    {({inputContext}) => (
      <InputContext onInput={inputContext}/>
    )}
  </FormulateContext.Consumer>
}

// Moving functions
const replaceWithCursor = (tree, id) => evalTree(tree,
  el => get(el,'id') == id
    ? CURSOR
    : el)

const insertCursorLeft = (tree, id) => evalTree(tree,
  el => get(el,'id') == id
    ? [CURSOR, el]
    : el)

const insertCursorRight = (tree, id) => evalTree(tree,
  el => get(el,'id') == id
    ? [el, CURSOR]
    : el)

const insertInput = (tree) => evalTree(tree,
  el => isCursor(el)
    ? INPUT
    : el)

const removeInput = (tree) => evalTree(tree,
  el => isInput(el)
    ? undefined
    : el)

const removeCursor = (tree) => evalTree(tree,
  el => isCursor(el)
    ? undefined
    : el)

const insertElem = (tree, key) => evalTree(tree,
  el => isCursor(el)
    ? [{id:uniqueId('G_'), type:'symbol', value:key}, el]
    : el)

const backspaceCursor = (tree, pos) => {
  const cleanTree = removeCursor(tree)
  const [id, dirrection] = pos
  switch (dirrection) {
    case 'left': return replaceWithCursor(cleanTree, id)
    case 'right': return insertCursorRight(cleanTree, id)
    default: return tree
  }
}

const insertCursor = (tree, pos) => {
  const cleanTree = removeCursor(tree)
  const [id, dirrection] = pos
  switch (dirrection) {
    case 'left': return insertCursorLeft(cleanTree, id)
    case 'right': return insertCursorRight(cleanTree, id)
    default: return tree
  }
}
