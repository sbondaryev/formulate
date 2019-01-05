@{%
const nanoid = require('nanoid')
%}

expr -> (frac | sym ):* {% id %}
frac -> sym "/" (sym | frac) {% (d) => [nanoid(), 'frac', d[0], d[2]] %}
sym -> (operation | number ) {% (d) => [nanoid(), 'sym', d[0][0]] %}
operation -> [+\-*] {% id %}
number -> [0-9] {% id %}
