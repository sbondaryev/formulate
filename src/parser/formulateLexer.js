// Generated from ../grammar/formulate.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\n)\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0006\b!\n\b\r\b\u000e\b\"\u0003\t",
    "\u0006\t&\n\t\r\t\u000e\t\'\u0002\u0002\n\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0003\u0002\u0004\u0004",
    "\u0002\f\f\u000f\u000f\u0003\u00022;\u0002*\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0013\u0003\u0002",
    "\u0002\u0002\u0005\u0015\u0003\u0002\u0002\u0002\u0007\u0017\u0003\u0002",
    "\u0002\u0002\t\u0019\u0003\u0002\u0002\u0002\u000b\u001b\u0003\u0002",
    "\u0002\u0002\r\u001d\u0003\u0002\u0002\u0002\u000f \u0003\u0002\u0002",
    "\u0002\u0011%\u0003\u0002\u0002\u0002\u0013\u0014\u0007,\u0002\u0002",
    "\u0014\u0004\u0003\u0002\u0002\u0002\u0015\u0016\u00071\u0002\u0002",
    "\u0016\u0006\u0003\u0002\u0002\u0002\u0017\u0018\u0007-\u0002\u0002",
    "\u0018\b\u0003\u0002\u0002\u0002\u0019\u001a\u0007/\u0002\u0002\u001a",
    "\n\u0003\u0002\u0002\u0002\u001b\u001c\u0007*\u0002\u0002\u001c\f\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0007+\u0002\u0002\u001e\u000e\u0003",
    "\u0002\u0002\u0002\u001f!\t\u0002\u0002\u0002 \u001f\u0003\u0002\u0002",
    "\u0002!\"\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003",
    "\u0002\u0002\u0002#\u0010\u0003\u0002\u0002\u0002$&\t\u0003\u0002\u0002",
    "%$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'%\u0003\u0002",
    "\u0002\u0002\'(\u0003\u0002\u0002\u0002(\u0012\u0003\u0002\u0002\u0002",
    "\u0005\u0002\"\'\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function formulateLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

formulateLexer.prototype = Object.create(antlr4.Lexer.prototype);
formulateLexer.prototype.constructor = formulateLexer;

Object.defineProperty(formulateLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

formulateLexer.EOF = antlr4.Token.EOF;
formulateLexer.T__0 = 1;
formulateLexer.T__1 = 2;
formulateLexer.T__2 = 3;
formulateLexer.T__3 = 4;
formulateLexer.T__4 = 5;
formulateLexer.T__5 = 6;
formulateLexer.NEWLINE = 7;
formulateLexer.INT = 8;

formulateLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

formulateLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

formulateLexer.prototype.literalNames = [ null, "'*'", "'/'", "'+'", "'-'",
                                          "'('", "')'" ];

formulateLexer.prototype.symbolicNames = [ null, null, null, null, null,
                                           null, null, "NEWLINE", "INT" ];

formulateLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4",
                                       "T__5", "NEWLINE", "INT" ];

formulateLexer.prototype.grammarFileName = "formulate.g4";



export default formulateLexer;

