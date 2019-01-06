const nearley = require("nearley")
const grammar = require("./grammar")

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

const parse = (srt) => {
  parser.feed(srt)
  return parser.results[0][0]
}

export default parse
