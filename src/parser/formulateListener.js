// Generated from ../grammar/formulate.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by formulateParser.
function formulateListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

formulateListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
formulateListener.prototype.constructor = formulateListener;

// Enter a parse tree produced by formulateParser#prog.
formulateListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by formulateParser#prog.
formulateListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by formulateParser#expr.
formulateListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by formulateParser#expr.
formulateListener.prototype.exitExpr = function(ctx) {
};



export default formulateListener;
