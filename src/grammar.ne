expr -> (frac | sym ):* {% id %}
frac -> sym "/" (sym | frac) {% (d) => ['frac', d[0], d[2]] %}
sym -> (operation | number ) {% (d) => ['sym', d[0][0]] %}
operation -> [+\-*] {% id %}
number -> [0-9] {% id %}
