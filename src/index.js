const nearley = require("nearley")
const grammar = require("./grammar.js")

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

const parse = (srt) => {
  parser.feed(srt)
  return parser.results
}

export default parse
