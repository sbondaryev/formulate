// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "expr$ebnf$1", "symbols": []},
    {"name": "expr$ebnf$1$subexpression$1", "symbols": ["frac"]},
    {"name": "expr$ebnf$1$subexpression$1", "symbols": ["sym"]},
    {"name": "expr$ebnf$1", "symbols": ["expr$ebnf$1", "expr$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "expr", "symbols": ["expr$ebnf$1"], "postprocess": id},
    {"name": "frac$subexpression$1", "symbols": ["sym"]},
    {"name": "frac$subexpression$1", "symbols": ["frac"]},
    {"name": "frac", "symbols": ["sym", {"literal":"/"}, "frac$subexpression$1"], "postprocess": (d) => ['frac', d[0], d[2]]},
    {"name": "sym$subexpression$1", "symbols": ["operation"]},
    {"name": "sym$subexpression$1", "symbols": ["number"]},
    {"name": "sym", "symbols": ["sym$subexpression$1"], "postprocess": (d) => ['sym', d[0][0]]},
    {"name": "operation", "symbols": [/[+\-*]/], "postprocess": id},
    {"name": "number", "symbols": [/[0-9]/], "postprocess": id}
]
  , ParserStart: "expr"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
