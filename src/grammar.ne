@{%
const uniqueId = require('lodash/uniqueId')
%}

expr -> (frac | sym ):* {% id %}
frac -> sym "/" (sym | frac) {% (d) => ({
  id: uniqueId('G_'),
  type: 'frac',
  numerator: d[0],
  denumerator: d[2][0]
}) %}
sym -> (operation | number ) {% (d) => ({
  id: uniqueId('G_'),
  type: 'symbol',
  value: d[0][0]
}) %}
operation -> [+\-*] {% id %}
number -> [0-9] {% id %}
