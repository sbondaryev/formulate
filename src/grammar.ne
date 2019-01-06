@{%
const uniqueId = require('lodash/uniqueId')
%}

expr -> (frac | sym ):* {% id %}
frac -> sym "/" (sym | frac) {% (d) => [uniqueId('G_'), 'frac', d[0], ['I'], d[2][0]] %}
sym -> (operation | number ) {% (d) => [uniqueId('G_'), d[0][0]] %}
operation -> [+\-*] {% id %}
number -> [0-9] {% id %}
