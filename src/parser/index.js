import {InputStream, CommonTokenStream} from 'antlr4'
import formulateLexer from './formulateLexer'
import formulateParser from './formulateParser'

export const parse = (expr) => {
  const chars = new InputStream(expr)
  const lexer = new formulateLexer(chars)

  const tokens = new CommonTokenStream(lexer)
  const parser = new formulateParser(tokens)
  const tree =  parser.prog()
  return tree
}
