// Generated from ../grammar/formulate.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var formulateListener = require('./formulateListener').formulateListener;
var grammarFileName = "formulate.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\n\"\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u0002\n\n\u0002\f\u0002\u000e\u0002\r\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u0015\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001d\n\u0003\f\u0003",
    "\u000e\u0003 \u000b\u0003\u0003\u0003\u0002\u0003\u0004\u0004\u0002",
    "\u0004\u0002\u0004\u0003\u0002\u0003\u0004\u0003\u0002\u0005\u0006\u0002",
    "#\u0002\u000b\u0003\u0002\u0002\u0002\u0004\u0014\u0003\u0002\u0002",
    "\u0002\u0006\u0007\u0005\u0004\u0003\u0002\u0007\b\u0007\t\u0002\u0002",
    "\b\n\u0003\u0002\u0002\u0002\t\u0006\u0003\u0002\u0002\u0002\n\r\u0003",
    "\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b\f\u0003\u0002",
    "\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002",
    "\u0002\u000e\u000f\b\u0003\u0001\u0002\u000f\u0015\u0007\n\u0002\u0002",
    "\u0010\u0011\u0007\u0007\u0002\u0002\u0011\u0012\u0005\u0004\u0003\u0002",
    "\u0012\u0013\u0007\b\u0002\u0002\u0013\u0015\u0003\u0002\u0002\u0002",
    "\u0014\u000e\u0003\u0002\u0002\u0002\u0014\u0010\u0003\u0002\u0002\u0002",
    "\u0015\u001e\u0003\u0002\u0002\u0002\u0016\u0017\f\u0006\u0002\u0002",
    "\u0017\u0018\t\u0002\u0002\u0002\u0018\u001d\u0005\u0004\u0003\u0007",
    "\u0019\u001a\f\u0005\u0002\u0002\u001a\u001b\t\u0003\u0002\u0002\u001b",
    "\u001d\u0005\u0004\u0003\u0006\u001c\u0016\u0003\u0002\u0002\u0002\u001c",
    "\u0019\u0003\u0002\u0002\u0002\u001d \u0003\u0002\u0002\u0002\u001e",
    "\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f",
    "\u0005\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002\u0006",
    "\u000b\u0014\u001c\u001e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'*'", "'/'", "'+'", "'-'", "'('", "')'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "NEWLINE",
                      "INT" ];

var ruleNames =  [ "prog", "expr" ];

function formulateParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

formulateParser.prototype = Object.create(antlr4.Parser.prototype);
formulateParser.prototype.constructor = formulateParser;

Object.defineProperty(formulateParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

formulateParser.EOF = antlr4.Token.EOF;
formulateParser.T__0 = 1;
formulateParser.T__1 = 2;
formulateParser.T__2 = 3;
formulateParser.T__3 = 4;
formulateParser.T__4 = 5;
formulateParser.T__5 = 6;
formulateParser.NEWLINE = 7;
formulateParser.INT = 8;

formulateParser.RULE_prog = 0;
formulateParser.RULE_expr = 1;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = formulateParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ProgContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(formulateParser.NEWLINE);
    } else {
        return this.getToken(formulateParser.NEWLINE, i);
    }
};


ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulateListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulateListener ) {
        listener.exitProg(this);
	}
};




formulateParser.ProgContext = ProgContext;

formulateParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, formulateParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===formulateParser.T__4 || _la===formulateParser.INT) {
            this.state = 4;
            this.expr(0);
            this.state = 5;
            this.match(formulateParser.NEWLINE);
            this.state = 11;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = formulateParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.INT = function() {
    return this.getToken(formulateParser.INT, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof formulateListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof formulateListener ) {
        listener.exitExpr(this);
	}
};



formulateParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, formulateParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case formulateParser.INT:
            this.state = 13;
            this.match(formulateParser.INT);
            break;
        case formulateParser.T__4:
            this.state = 14;
            this.match(formulateParser.T__4);
            this.state = 15;
            this.expr(0);
            this.state = 16;
            this.match(formulateParser.T__5);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 28;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 26;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, formulateParser.RULE_expr);
                    this.state = 20;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 21;
                    _la = this._input.LA(1);
                    if(!(_la===formulateParser.T__0 || _la===formulateParser.T__1)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 22;
                    this.expr(5);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, formulateParser.RULE_expr);
                    this.state = 23;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 24;
                    _la = this._input.LA(1);
                    if(!(_la===formulateParser.T__2 || _la===formulateParser.T__3)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 25;
                    this.expr(4);
                    break;

                }
            }
            this.state = 30;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


formulateParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

formulateParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


export default formulateParser;
